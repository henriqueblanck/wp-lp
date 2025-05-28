import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import { 
  Bot, 
  BrainCircuit, 
  MessageSquare, 
  UserCheck, 
  ListFilter,
  BarChart,
  Repeat,
  Zap,
  Webhook,
  Database,
  Share2,
  Settings,
  ArrowRight
} from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: 'Automação Especializada',
      description: 'Nossa equipe desenvolve fluxos automatizados personalizados para seu negócio.'
    },
    {
      icon: <Webhook size={24} />,
      title: 'Integrações Avançadas',
      description: 'Conectamos seu WhatsApp com qualquer sistema ou API existente.'
    },
    {
      icon: <Database size={24} />,
      title: 'Gestão de Dados',
      description: 'Coleta e organização inteligente das informações dos seus clientes.'
    },
    {
      icon: <Share2 size={24} />,
      title: 'APIs Personalizadas',
      description: 'Desenvolvimento de integrações específicas para seu negócio.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Implementação Completa',
      description: 'Nossa equipe configura e personaliza toda a solução para você.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Suporte Especializado',
      description: 'Acompanhamento contínuo e ajustes conforme suas necessidades.'
    }
  ];
  
  const faqs = [
    {
      question: 'Como funciona o processo de implementação?',
      answer: 'Nossa equipe de especialistas analisa suas necessidades, desenvolve uma estratégia personalizada e implementa toda a solução. O processo inclui análise do negócio, desenvolvimento dos fluxos, integrações necessárias e acompanhamento contínuo.'
    },
    {
      question: 'Que tipos de automação posso implementar?',
      answer: 'As possibilidades são infinitas! Podemos automatizar atendimento inicial, qualificação de leads, vendas, suporte, integrações com seu CRM, ERP ou qualquer outro sistema. Nossa equipe avalia seu caso específico e desenvolve a melhor solução.'
    },
    {
      question: 'Quanto tempo leva para implementar?',
      answer: 'O tempo varia conforme a complexidade do projeto. Após a análise inicial, fornecemos um cronograma detalhado. Tipicamente, projetos são implementados em 2-4 semanas.'
    },
    {
      question: 'É possível integrar com meus sistemas atuais?',
      answer: 'Sim! Podemos integrar com qualquer sistema através de APIs. Nossa equipe técnica desenvolve integrações personalizadas para suas necessidades específicas.'
    },
    {
      question: 'Como é feita a manutenção dos fluxos?',
      answer: 'Nossa equipe monitora continuamente o desempenho e faz ajustes conforme necessário. Você terá acesso a um especialista dedicado para solicitar alterações e melhorias.'
    }
  ];

  return (
    <>
      <Hero
        title="Automação Especializada para WhatsApp"
        subtitle="Deixe nossa equipe de especialistas criar e implementar automações personalizadas para seu negócio, com suporte contínuo."
        image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        variant="ai"
      />
      
      <FeatureSection
        title="Automação profissional completa"
        subtitle="Nossa equipe implementa soluções personalizadas que automatizam seus processos e impulsionam resultados."
        features={features}
        bgColor="bg-gray-50"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Implementação especializada</h2>
              <p className="text-gray-600 mb-6">
                Nossa equipe de especialistas cuida de todo o processo, desde a análise até a implementação e manutenção contínua da sua solução.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Análise personalizada do seu negócio</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Desenvolvimento de fluxos customizados</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Implementação completa por especialistas</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Suporte e manutenção contínua</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a href={WHATSAPP_LINK} className="btn btn-primary">
                  Falar com especialista
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Implementação Especializada" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -top-5 -right-5 h-24 w-24 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                <div className="text-center">
                  <div className="text-xs">Até</div>
                  <div className="text-2xl">80%</div>
                  <div className="text-xs">mais eficiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Automação Personalizada" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="mb-6">Automação que gera resultados</h2>
              <p className="text-gray-600 mb-6">
                Nossas soluções são desenvolvidas para maximizar seus resultados, com foco em eficiência e ROI.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Atendimento 24/7 automatizado</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Integração com seus sistemas existentes</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Coleta e organização de dados</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Relatórios e métricas detalhadas</span>
                </li>
              </ul>
              
              <a href={WHATSAPP_LINK} className="btn btn-primary">
                Falar com especialista
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Ideal para diversos segmentos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Nossa equipe desenvolve soluções personalizadas para diferentes tipos de negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Automatize vendas, suporte e pós-venda com integração completa ao seu sistema.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Catálogo de produtos automático</li>
                <li>• Carrinho de compras pelo WhatsApp</li>
                <li>• Acompanhamento de pedidos</li>
                <li>• Integração com plataforma de e-commerce</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educação</h3>
              <p className="text-gray-600 mb-4">
                Gestão de matrículas, dúvidas e comunicação com alunos de forma automatizada.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Processo de matrícula automatizado</li>
                <li>• Distribuição de material didático</li>
                <li>• Suporte ao aluno 24/7</li>
                <li>• Integração com sistema acadêmico</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Imobiliárias</h3>
              <p className="text-gray-600 mb-4">
                Automatize captação de leads, agendamentos e envio de informações de imóveis.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Catálogo de imóveis automático</li>
                <li>• Agendamento de visitas</li>
                <li>• Qualificação de leads</li>
                <li>• Integração com CRM imobiliário</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Automatize seu WhatsApp com especialistas"
        subtitle="Nossa equipe desenvolve e implementa a solução ideal para seu negócio. Fale com um especialista agora."
        buttonText="Começar agora"
        variant="default"
      />
      
      <FAQSection faqs={faqs} />
    </>
  );
};

export default AIAutomationPage;