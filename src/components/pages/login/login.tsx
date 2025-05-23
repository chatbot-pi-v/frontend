import Waves from '../../../../public/asset/login/WAVES.svg';
import waves2 from '../../../../public/asset/login/waves2.svg';
import chipsCircle from '../../../../public/asset/login/chipsCircle.svg';
import ElipseMax from '../../../../public/asset/login/EllipseMax.svg';
import ElipseMin from '../../../../public/asset/login/EllipseMin.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@src/hooks/use-auth/use-auth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      await authContext.login({ email, password }, () => {
        navigate('/dashboard');
      });
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#E9F1FA]">
      <div className="hidden lg:flex lg:flex-1 md:flex-1 relative">
        <div className="absolute top-0 left-0 flex flex-col items-start">
          <img src={Waves} className="h-auto w-37" />
          <img src={waves2} className="h-auto w-35" style={{ position: 'absolute' }} />
        </div>

        <div className="absolute bottom-0 left-0 flex flex-col items-start">
          <img src={chipsCircle} className="h-auto w-55" />
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-[2_2_0%] items-center pt-8">
        <div className="text-center mt-8 mb-8">
          <h1 className="text-3xl lg:text-5xl font-gothic text-gray-800">Nanã Chatbot</h1>
          <h2 className="text-md lg:text-lg font-Poppins text-gray-800 mt-1">Dashboard Admin</h2>
        </div>

        <form className="w-full max-w-sm flex flex-col space-y-6 items-center mt-25" onSubmit={(e) => handleLogin(e)}>
          <h3 className="text-lg lg:text-xl text-gray-800 font-Poppins">LOGIN</h3>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username"
            className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-sm text-gray-800 py-2"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-sm text-gray-800 py-2"
          />

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 transition text-white text-sm px-6 py-2 rounded">
            Entrar
          </button>
        </form>
      </div>

      <div className="hidden lg:flex lg:flex-1 md:flex-1 relative flex flex-col items-center justify-center items-end">
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2">
          <img src={ElipseMin} className="h-auto w-9 ml-17 mt-72" />
        </div>

        <div className="">
          <img src={ElipseMax} className="h-auto w-30" />
        </div>
      </div>
    </div>
  );
};

export default Login;