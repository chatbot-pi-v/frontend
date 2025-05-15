import send_message_icon from '../../../../public/asset/send_message_icon.svg'
import { Header } from './components/header/header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ContentSender } from './components/ContentSender'

interface IMessages {
  text: string;
  sender: 'bot' | 'user';
}

export const Chat = () => {
  const [ messageValue, setMessageValue ] = useState<string>('');
  const [messages, setMessages] = useState<IMessages[]>([
    { sender: 'bot', text: 'Olá, como posso ajudar?' },
  ]);

  const dispatchMessage = async (message: string) => {
    setMessages((prev) => [
      ...prev, 
      { sender: 'user', text: message }
    ]);

    try {
      const response = await axios.post('http://localhost:3000/question', {
        question: message,
      });

      const answer = response.data?.answer ?? 'Desculpe, não entendi.';
      setMessages((prev) => [...prev, { sender: 'bot', text: answer }]);
    } catch (error) {
      console.error('Erro = ', error);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Erro' },
      ]);
    }
  };

  const sendAMessage = (event: React.FormEvent) => {
    event.preventDefault();
    if (messageValue.trim() === '') return;

    dispatchMessage(messageValue);
    setMessageValue('');
  };

  useEffect(() => {
    const chatContainer = document.querySelector('section.flex-1');
    if (chatContainer) 
      chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className='w-full h-screen bg-[#e4e4e4] flex flex-col items-center'>
      <Header />

      <main className='flex flex-col flex-1 w-full px-40 overflow-hidden justify-center items-center'>
        <section className='flex flex-col w-[90%] flex-1 overflow-y-auto scrollbar-hide scroll-smooth'>
          {messages.map((item, index) => (
            <ContentSender item={item} key={index} />
          ))}
        </section>
      </main>

      <section className='flex items-center justify-center w-full p-4'>
        <form onSubmit={(e: React.FormEvent) => sendAMessage(e)} className='flex gap-2 w-full max-w-[800px]'>
          <input 
            type='text' 
            placeholder='Digite uma mensagem...' 
            className='border rounded-2xl p-4 h-10 w-full' 
            onChange={(e) => setMessageValue(e.target.value)}
            value={messageValue}
          />
          <button type='submit' className='flex w-12 h-12 rounded-3xl'>
            <img src={send_message_icon} />
          </button>
        </form>
      </section>
    </div>
  )
}
