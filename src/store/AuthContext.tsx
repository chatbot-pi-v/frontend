import { firebaseAuth } from '@src/firebase/BaseConfig';
import {
  IAuth,
  LoginFormValues,
  UserFormValues
} from '@src/interfaces/interfaces';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Cria o contexto com valores padrão
export const AuthContext = createContext<IAuth>({
  user: firebaseAuth.currentUser,
  loading: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {}
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Sign up
  const signUp = async (creds: UserFormValues) => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        creds.email,
        creds.password
      );
      console.log(userCredential)
      setCurrentUser(userCredential.user);
      //navigate('/'); // Redireciona após cadastro
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      // Trate o erro conforme necessário
    } finally {
      setIsLoading(false);
    }
  };

  // Sign in
  const signIn = async (creds: LoginFormValues, onSuccess?: () => void) => {
    console.log("Chegou na signIn");
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        creds.email,
        creds.password
      );
      console.log("Logado");
      setCurrentUser(userCredential.user);
      onSuccess?.(); // só chama se estiver definido
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  // Sign out
  const signOut = async () => {
    setIsLoading(true);
    try {
      await firebaseSignOut(firebaseAuth);
      setCurrentUser(null);
      navigate('/login'); // Redireciona após logout
    } catch (error) {
      console.error('Erro ao sair:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const authValues: IAuth = {
    user: currentUser,
    loading: isLoading,
    signIn,
    signUp,
    signOut
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isAuthLoading) return <div>Carregando autenticação...</div>;

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
