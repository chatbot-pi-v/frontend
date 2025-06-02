import send_message_icon from '../../../../public/asset/send_message_icon.svg'
import { Header } from './components/header/header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ContentSender } from './components/ContentSender'

interface IMessages {
  text: string;
  sender: 'bot' | 'user';
  image_base64?: string | null;
  image_caption?: string | null;
}

const LoadingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '600ms' }}></div>
    </div>
  );
};

export const Chat = () => {
  const [ messageValue, setMessageValue ] = useState<string>('');
  const [messages, setMessages] = useState<IMessages[]>([
    { sender: 'bot',
      text: 'Olá, sou sua assistente virtual inspirada na sabedoria ancestral de Nanã Buruquê, respeitada figura das tradições africanas e afro-brasileiras. Em que posso lhe ajudar?' },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatchMessage = async (message: string) => {
    setMessages((prev) => [
      ...prev, 
      { sender: 'user', text: message }
    ]);
    
    setIsLoading(true);
  
    try {
      const response = await axios.post('http://localhost:3000/question', {
        question: message,
      });

      console.log('response = ', response)
  
      const text = response.data?.answer ?? 'Desculpe, não entendi.';
      const image_base64 = response.data?.image_base64 ?? null;
      const image_caption = response.data?.image_caption ?? null;
  
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text, image_base64, image_caption }
      ]);
    } catch (error) {
      console.error('Erro = ', error);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Erro' },
      ]);
    } finally {
      setIsLoading(false);
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
  }, [messages, isLoading]);

  return (
    <div className='w-full h-screen bg-[#e4e4e4] flex flex-col items-center'>
      <Header />

      <main className='flex flex-col flex-1 w-full px-40 overflow-hidden justify-center items-center'>
        <section className='flex flex-col max-w-[950px] w-full flex-1 overflow-y-auto scrollbar-hide scroll-smooth mt-4'>
          {messages.map((item, index) => (
            <ContentSender item={item} key={index} isLoading={isLoading}/>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg max-w-[70%] shadow">
                <LoadingIndicator />
              </div>
            </div>
          )}
        </section>
      </main>

      <section className='flex items-center justify-center w-full p-4'>
        <form onSubmit={(e: React.FormEvent) => sendAMessage(e)} className='flex gap-2 w-full max-w-[950px]'>
          <textarea 
            placeholder='Digite uma mensagem...' 
            className='border rounded-2xl p-4 w-full resize-none overflow-y-auto scrollbar-hide text-left'
            onChange={(e) => setMessageValue(e.target.value)}
            value={messageValue}
            disabled={isLoading}
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (messageValue.trim() !== '') {
                  sendAMessage(e);
                }
              }
            }}
          />
          <button 
            type='submit' 
            className='flex w-12 h-12 rounded-3xl' 
            disabled={isLoading}
          >
            <img src={send_message_icon} />
          </button>
        </form>
      </section>
    </div>
  )
}