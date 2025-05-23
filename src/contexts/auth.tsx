import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '@src/firebase/BaseConfig';
import { toast } from 'react-toastify';
import { AuthApi } from '@src/repositories/auth/auth';
import * as StorageService from '@src/services/storage';
import { setAuthorizationHeader } from '@src/services/instance';

interface IUser {
  email: string;
  password: string;
}

interface IAuthContext {
  isAuthenticated: boolean;
  token: string | null;
  login: (data: IUser, callback?: () => void) => Promise<void>;
  logout: (navigate?: (path: string) => void) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  userId: string;
}

// Criar valores padrão para o contexto
const defaultAuthContext: IAuthContext = {
  isAuthenticated: false,
  token: null,
  login: async () => {
    console.warn('login chamado fora do AuthProvider');
  },
  logout: () => {
    console.warn('logout chamado fora do AuthProvider');
  },
  loading: true,
  setLoading: () => {},
  userId: ''
};

export const AuthContext = createContext<IAuthContext>(defaultAuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');

  const auth = getAuth(app);

  const login = async (data: IUser, callback?: () => void) => {
    try {
      console.log('Executando login...', data);
      setLoading(true);
      const response = await AuthApi.login(data.email, data.password);
      const userToken = await response.getIdToken();

      console.log('Login bem-sucedido, token obtido');
      setAuthorizationHeader(userToken);
      setToken(userToken);
      setIsAuthenticated(true);
      StorageService.setItem('session-token', { accessToken: userToken });

      if (callback) {
        console.log('Executando callback do login');
        callback();
      }
    } catch (error) {
      console.error('Erro no login:', error);
      toast.error('Credenciais inválidas');
    } finally {
      setLoading(false);
    }
  };

  const logout = (navigate?: (path: string) => void) => {
    setToken('');
    StorageService.removeItem('session-token');
    setIsAuthenticated(false);
    setUserId('');
    if (navigate) {
      navigate('/login');
    }
  };

  useEffect(() => {
    const saved = StorageService.getItem('session-token');
    if (saved?.accessToken) {
      setIsAuthenticated(true);
      setToken(saved.accessToken);
      setAuthorizationHeader(saved.accessToken);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setIsAuthenticated(true);
      } else {
        setUserId('');
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const contextValue: IAuthContext = {
    isAuthenticated,
    token,
    login,
    logout,
    loading,
    setLoading,
    userId
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};