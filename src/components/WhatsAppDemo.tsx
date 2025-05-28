import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  isBot: boolean;
  delay: number;
}

interface WhatsAppDemoProps {
  demoType?: 'ai' | 'service';
}

const WhatsAppDemo: React.FC<WhatsAppDemoProps> = ({ demoType = 'ai' }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Pre-defined conversation flows based on demo type
  const aiConversation: Message[] = [
    { id: 1, content: 'Olá! Bem-vindo à Loja Virtual ABC. Em que posso ajudar?', isBot: true, delay: 1000 },
    { id: 2, content: 'Quero informações sobre os produtos', isBot: false, delay: 2000 },
    { id: 3, content: 'Claro! Temos várias categorias de produtos. Qual você tem interesse?\n\n1️⃣ Eletrônicos\n2️⃣ Moda\n3️⃣ Casa e Decoração\n4️⃣ Esportes', isBot: true, delay: 2500 },
    { id: 4, content: '1', isBot: false, delay: 1500 },
    { id: 5, content: 'Ótima escolha! Na categoria Eletrônicos temos:\n\n📱 Smartphones\n💻 Notebooks\n🎮 Videogames\n🎧 Acessórios\n\nQual desses você gostaria de ver?', isBot: true, delay: 2500 },
    { id: 6, content: 'Smartphones', isBot: false, delay: 1500 },
    { id: 7, content: 'Temos os melhores smartphones do mercado! Aqui estão nossas ofertas:\n\n1. iPhone 14 Pro - R$ 7.999,00\n2. Samsung Galaxy S22 - R$ 5.499,00\n3. Xiaomi 12 - R$ 3.999,00\n\nGostaria de mais detalhes sobre algum desses modelos?', isBot: true, delay: 3000 },
  ];
  
  const serviceConversation: Message[] = [
    { id: 1, content: 'Olá! Bem-vindo ao Salão de Beleza Style. Como posso ajudar?', isBot: true, delay: 1000 },
    { id: 2, content: 'Quero agendar um horário para corte de cabelo', isBot: false, delay: 2000 },
    { id: 3, content: 'Claro! Vou te ajudar com isso. Qual dia você prefere?\n\n1️⃣ Amanhã\n2️⃣ Sexta-feira\n3️⃣ Sábado\n4️⃣ Próxima semana', isBot: true, delay: 2500 },
    { id: 4, content: '3', isBot: false, delay: 1500 },
    { id: 5, content: 'Ótimo! Temos os seguintes horários disponíveis no sábado:\n\n⏰ 09:00\n⏰ 11:30\n⏰ 14:00\n⏰ 16:30\n\nQual horário prefere?', isBot: true, delay: 2500 },
    { id: 6, content: '14:00', isBot: false, delay: 1500 },
    { id: 7, content: 'Perfeito! Vou reservar um horário para corte de cabelo no sábado às 14:00. Poderia confirmar seu nome, por favor?', isBot: true, delay: 3000 },
  ];
  
  const selectedConversation = demoType === 'ai' ? aiConversation : serviceConversation;
  
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let currentIndex = 0;

    const showNextMessage = () => {
      if (currentIndex >= selectedConversation.length) return;

      const message = selectedConversation[currentIndex];
      
      const timeout = setTimeout(() => {
        if (message.isBot) {
          setIsTyping(true);
          const typingTimeout = setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, message]);
            currentIndex++;
            showNextMessage();
          }, 1500);
          timeouts.push(typingTimeout);
        } else {
          setCurrentMessage(message.content);
          const userTimeout = setTimeout(() => {
            setMessages(prev => [...prev, message]);
            setCurrentMessage('');
            currentIndex++;
            showNextMessage();
          }, 500);
          timeouts.push(userTimeout);
        }
      }, message.delay);
      
      timeouts.push(timeout);
    };

    // Reset state before starting new conversation
    setMessages([]);
    setCurrentMessage('');
    setIsTyping(false);
    currentIndex = 0;
    
    // Start the conversation
    showNextMessage();

    // Cleanup function
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      timeouts = [];
    };
  }, [demoType]); // Reset and restart when demoType changes
  
  return (
    <section id="demo" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Veja o ZyIA em ação</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {demoType === 'ai' 
              ? 'Experimente como a automação inteligente pode transformar seu atendimento.' 
              : 'Veja como o agendamento e atendimento ficam simples com o ZyIA.'}
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto"
        >
          <div className="bg-gray-100 rounded-t-2xl p-3 border border-gray-200">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-whatsapp flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">
                  {demoType === 'ai' ? 'Loja Virtual ABC' : 'Salão de Beleza Style'}
                </p>
                <p className="text-xs text-gray-500">online</p>
              </div>
            </div>
          </div>
          
          <div className="h-96 bg-[#e5ded8] bg-opacity-70 p-4 overflow-y-auto border-x border-gray-200 flex flex-col">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`chat-bubble ${
                    message.isBot ? 'chat-bubble-left' : 'chat-bubble-right'
                  } max-w-[80%]`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                  <div className="text-right mt-1">
                    <span className="text-xs opacity-70">
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="chat-bubble chat-bubble-left py-2 px-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-b-2xl p-3 border border-gray-200 border-t-0 flex items-center">
            <input
              type="text"
              value={currentMessage}
              className="flex-1 bg-gray-100 rounded-full py-2 px-4 focus:outline-none text-sm"
              placeholder="Digite uma mensagem"
              readOnly
            />
            <button className="ml-2 p-2 rounded-full bg-whatsapp text-white">
              <Send size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;