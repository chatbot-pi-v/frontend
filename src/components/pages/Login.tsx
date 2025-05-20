
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { firebaseAuth } from '@src/firebase/BaseConfig';
import { LoginFormValues } from '@src/interfaces/interfaces';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (credentials: LoginFormValues) => {
    console.log('cheguei putas')
    try {
        const userCredential = await signInWithEmailAndPassword(
            firebaseAuth,
            credentials.email,
            credentials.password
        );

        console.log(userCredential)
    } catch(error) {
        console.log(error)
    }
  };

  useEffect(() => {
    console.log('password = ', password)
  }, [password]);

  return (
    <div className="flex flex-col items-center">
      <h2>Login</h2>
      <button type='button' onClick={handleLogin}>Clica</button>
    </div>
  );
};

export default Login;
