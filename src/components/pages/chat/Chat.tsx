import { useState, useCallback, useRef } from 'react'
import { useChat } from '../../hooks/useChat'
import vector_chatbot from '../../../../public/asset/Vector_chatbot.svg'
import arrow_left from '../../../../public/asset/arrow_left.svg'
import bot_icon from '../../../../public/asset/bot_icon.svg'
import user_icon from '../../../../public/asset/user_icon.svg'
import send_message_icon from '../../../../public/asset/send_message_icon.svg'

interface IChatHistory {
  sender: 'user' | 'bot'
  text: string
}

export const Chat = () => {
  // Estado que armazena o histórico do chat (mensagens enviadas e recebidas)
  const [chatHistory, setChatHistory] = useState<IChatHistory[]>([])

  // Hook personalizado que fornece funções e estado do chat
  const { createQuestion, questionValue, setQuestionValue } = useChat()

  // Referência para acessar diretamente o elemento <textarea> do DOM
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const send_message_user = useCallback(() => {

    if (questionValue.trim() === '') return

    // Cria o objeto da pergunta do usuário e atualiza o histórico
    const newQuestion: IChatHistory = { sender: 'user', text: questionValue }
    setChatHistory(prev => [...prev, newQuestion])

    // Envia a pergunta e adiciona a resposta ao histórico assim que chegar
    createQuestion(questionValue, (resposta: string) => {
      const respostaBot: IChatHistory = { sender: 'bot', text: resposta }
      setChatHistory(prev => [...prev, respostaBot])
    })

    setQuestionValue('')

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }, [questionValue])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && questionValue.trim() !== '') {
      e.preventDefault()
      send_message_user()
    }
  }

  /**Atualiza o estado da pergunta enquanto o usuário digita*/
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

    setQuestionValue(e.target.value)

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">

      <div className="relative flex justify-center items-center w-full h-[135px] overflow-hidden">

        <button id="arrow_back_chat" className="absolute left-4 top-4 p-2 rounded-full hover:bg-gray-200 focus:outline-none z-10">
          <img src={arrow_left} className="h-6 w-10" alt="Voltar" />
        </button>
        <img
          src={vector_chatbot}
          alt="Vetor azul"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <h1 id="chatBot_tittle" className="text-white text-4xl font-leagueGothic z-10">CHATBOT</h1>
      </div>


      {/* Caixa de mensagem do bot e do usuário */}
      <div className="flex-1 overflow-auto p-4 space-y-4">

        {chatHistory.map((msg, index) => (

          <div key={index} className="flex justify-center w-full">

            <div className={`flex w-full max-w-3xl ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start space-x-2`}>

              {msg.sender === 'bot' && <img src={bot_icon} className="w-8 h-8 sm:w-10 sm:h-10 mt-1" alt="Bot" />}

              <div className={`p-3 rounded-xl max-w-[80%] text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-blue-100 text-gray-900' : 'bg-gray-200 text-gray-800'}`}>
                <p>{msg.text}</p>
              </div>

              {msg.sender === 'user' && <img src={user_icon} className="w-8 h-8 sm:w-10 sm:h-10 mt-1" alt="Usuário" />}

            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-5 flex justify-center fixed bottom-0 left-0 w-full z-10">

        <div className="flex items-end space-x-4 w-full max-w-2xl">

          <textarea
            ref={textareaRef}
            value={questionValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
            rows={1}
            style={{ maxHeight: '200px' }}
          />

          <button onClick={send_message_user} className="p-2 hover:bg-gray-300 rounded-full" aria-label="Enviar mensagem">
            <img src={send_message_icon} className="h-10 w-10" alt="Enviar" />
          </button>

        </div>
      </div>
    </div>
  )
}
