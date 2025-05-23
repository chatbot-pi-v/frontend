import { AuthContext } from '@src/contexts/auth';
import { useContext } from 'react';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context || Object.keys(context).length === 0) {
    console.error('AuthContext não está disponível. Verifique se o componente está dentro do AuthProvider');
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  // Verificar se estamos recebendo os valores padrão (indicando problema no provider)
  if (context.login.toString().includes('login chamado fora do AuthProvider')) {
    console.error('Recebendo valores padrão do AuthContext - AuthProvider pode não estar funcionando');
  }
  
  return context;
};