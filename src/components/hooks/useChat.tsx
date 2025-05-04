import { useState } from 'react'

export const useChat = () => {

  // Estado que armazena o valor atual digitado no campo de input
  const [questionValue, setQuestionValue] = useState('')

  /**
   * Função que envia a pergunta do usuário e recebe a resposta do servidor (ou simulação).
   * @param pergunta A string digitada pelo usuário.
   * @param callback Função de retorno que recebe a resposta da API.
   */
  const createQuestion = (pergunta: string, callback: (resposta: string) => void) => {
    // Realizar a integração aqui.

    // Simulação temporária da resposta com setTimeout:
    setTimeout(() => {
      callback(`Essa é uma resposta automática para: "${pergunta}"`)
    }, 500)
  }

  // Retorna tudo o que será utilizado no componente Chat
  return {
    questionValue,     // valor atual digitado no input
    setQuestionValue,  // função para atualizar esse valor
    createQuestion,    // função para envio da pergunta e resposta
    isLoading: false,  
  }
}
