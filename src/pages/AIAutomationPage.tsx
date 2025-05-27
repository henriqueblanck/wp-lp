import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import WhatsAppDemo from '../components/WhatsAppDemo';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import { 
  Bot, 
  BrainCircuit, 
  MessageSquare, 
  UserCheck, 
  ListFilter,
  BarChart,
  Repeat,
  Zap
} from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: 'IA Avançada',
      description: 'Modelos de linguagem de última geração que compreendem o contexto e intenção dos seus clientes.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Fluxos de Conversação',
      description: 'Crie jornadas personalizadas com condicionais, variáveis e integrações para cada cenário.'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Qualificação de Leads',
      description: 'Automatize a qualificação inicial de leads antes de direcionar para sua equipe de vendas.'
    },
    {
      icon: <ListFilter size={24} />,
      title: 'Segmentação Inteligente',
      description: 'Categorize contatos automaticamente com base em interações e comportamentos.'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Análise de Sentimento',
      description: 'Identifique a satisfação do cliente em tempo real e tome ações apropriadas.'
    },
    {
      icon: <Repeat size={24} />,
      title: 'Aprendizado Contínuo',
      description: 'Sistema que melhora com o tempo, aprendendo com as interações para respostas mais precisas.'
    }
  ];
  
  const faqs = [
    {
      question: 'Como a IA do ZapFlow se diferencia de chatbots comuns?',
      answer: 'Nossa IA utiliza modelos de linguagem avançados que compreendem contexto e nuances da comunicação humana, muito além de simples palavras-chave. Isso permite conversas mais naturais e respostas mais precisas, mesmo para perguntas complexas ou inéditas.'
    },
    {
      question: 'Posso personalizar as respostas da IA para meu negócio?',
      answer: 'Absolutamente! Você pode treinar a IA com informações específicas do seu negócio, produtos, serviços e políticas. Também é possível definir o tom de voz e personalidade do atendimento automatizado.'
    },
    {
      question: 'A IA consegue identificar quando deve transferir para um atendente humano?',
      answer: 'Sim, o sistema identifica automaticamente situações complexas, frustração do cliente ou solicitações específicas que necessitam intervenção humana, transferindo a conversa de forma suave para sua equipe.'
    },
    {
      question: 'Como criar fluxos de conversação eficientes?',
      answer: 'Nossa plataforma oferece um editor visual intuitivo onde você pode construir fluxos com condicionais, variáveis e integrações. Oferecemos também templates pré-configurados para os casos de uso mais comuns.'
    },
    {
      question: 'É possível integrar a IA com meu sistema de CRM ou e-commerce?',
      answer: 'Sim, oferecemos integrações nativas com os principais sistemas de CRM e e-commerce do mercado, além de webhooks e API para integrações personalizadas.'
    },
    {
      question: 'Quais métricas posso acompanhar nos fluxos de automação?',
      answer: 'Você pode monitorar taxas de conclusão dos fluxos, pontos de abandono, tempo médio de conversação, satisfação do cliente, eficiência na resolução de problemas e conversão em vendas ou leads qualificados.'
    }
  ];

  return (
    <>
      <Hero
        title="Automatize seu WhatsApp com Inteligência Artificial"
        subtitle="Transforme conversas em resultados com fluxos inteligentes que entendem seus clientes e geram mais negócios."
        image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        variant="ai"
      />
      
      <FeatureSection
        title="Automação que realmente funciona"
        subtitle="Nossa tecnologia de IA vai além de simples respostas automáticas, criando experiências conversacionais que convertem."
        features={features}
        bgColor="bg-gray-50"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Fluxos inteligentes que entendem seu cliente</h2>
              <p className="text-gray-600 mb-6">
                Crie jornadas conversacionais que adaptam-se em tempo real às necessidades dos seus clientes.
                Nossa IA avançada compreende intenções, contexto e sentimento.
              </p>
              
              <ul className="space-y-4">
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Redução de até 80% no tempo de atendimento</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Atendimento 24/7 sem custos adicionais</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Qualificação automática de leads</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Integração com seu CRM e outras ferramentas</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AI Automation Flow" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -top-5 -right-5 h-24 w-24 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                <div className="text-center">
                  <div className="text-xs">Até</div>
                  <div className="text-2xl">70%</div>
                  <div className="text-xs">economia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppDemo demoType="ai" />
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Fluxo visual" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="mb-6">Editor visual intuitivo</h2>
              <p className="text-gray-600 mb-6">
                Crie fluxos complexos sem conhecimento técnico usando nossa interface drag-and-drop. 
                Combine condicionais, variáveis, integrações e respostas dinâmicas.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Suporte a imagens, vídeos, arquivos e botões</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Templates prontos para diferentes segmentos</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Múltiplos fluxos conectados para jornadas completas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Análise e otimização de desempenho em tempo real</span>
                </li>
              </ul>
              
              <a href="#contato" className="btn btn-primary">
                Experimente agora
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Automatize seu WhatsApp hoje mesmo"
        subtitle="Comece a usar IA para qualificar leads, responder dúvidas e vender mais, 24 horas por dia."
        buttonText="Começar agora"
        variant="default"
      />
      
      <FAQSection faqs={faqs} />
      
      <ContactForm />
    </>
  );
};

export default AIAutomationPage;