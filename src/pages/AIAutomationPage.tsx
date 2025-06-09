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
  ArrowRight,
  HeartPulse,
  Utensils,
  Briefcase
} from 'lucide-react';
import { WHATSAPP_LINKS } from '../constants';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: 'Automação Especializada',
      description: 'Nossa equipe desenvolve fluxos automatizados personalizados para maximizar suas vendas e conversões.'
    },
    {
      icon: <Webhook size={24} />,
      title: 'Integrações Avançadas',
      description: 'Conectamos seu WhatsApp com CRM, sistemas de vendas e qualquer API existente.'
    },
    {
      icon: <Database size={24} />,
      title: 'Gestão de Leads',
      description: 'Coleta e organização inteligente das informações dos seus prospects e clientes.'
    },
    {
      icon: <Share2 size={24} />,
      title: 'APIs Personalizadas',
      description: 'Desenvolvimento de integrações específicas para seu funil de vendas.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Implementação Completa',
      description: 'Nossa equipe configura e personaliza toda a solução de vendas para você.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Suporte Especializado',
      description: 'Acompanhamento contínuo e otimizações para maximizar suas vendas.'
    }
  ];
  
  const faqs = [
    {
      question: 'Como funciona o processo de implementação?',
      answer: 'Nossa equipe de especialistas analisa suas necessidades de vendas, desenvolve uma estratégia personalizada e implementa toda a solução. O processo inclui análise do funil de vendas, desenvolvimento dos fluxos, integrações necessárias e acompanhamento contínuo.'
    },
    {
      question: 'Que tipos de automação de vendas posso implementar?',
      answer: 'As possibilidades são infinitas! Podemos automatizar qualificação de leads, nutrição de prospects, vendas, follow-up pós-venda, integrações com seu CRM, ERP ou qualquer outro sistema. Nossa equipe avalia seu processo de vendas e desenvolve a melhor solução.'
    },
    {
      question: 'Quanto tempo leva para implementar?',
      answer: 'O tempo varia conforme a complexidade do projeto. Após a análise inicial, fornecemos um cronograma detalhado. Tipicamente, projetos são implementados em 2-4 semanas.'
    },
    {
      question: 'É possível integrar com meus sistemas de vendas atuais?',
      answer: 'Sim! Podemos integrar com qualquer sistema através de APIs. Nossa equipe técnica desenvolve integrações personalizadas para suas necessidades específicas de vendas.'
    },
    {
      question: 'Como é feita a manutenção dos fluxos de vendas?',
      answer: 'Nossa equipe monitora continuamente o desempenho das vendas e faz ajustes conforme necessário. Você terá acesso a um especialista dedicado para solicitar alterações e melhorias no funil de vendas.'
    }
  ];

  return (
    <>
      <Hero
        title="Automação Especializada para WhatsApp e Vendas"
        subtitle="Deixe nossa equipe de especialistas criar e implementar automações personalizadas para maximizar suas vendas, com suporte contínuo."
        image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        variant="ai"
        showButtons={false}
      />
      
      <FeatureSection
        title="Automação profissional para vendas"
        subtitle="Nossa equipe implementa soluções personalizadas que automatizam seus processos de vendas e impulsionam resultados."
        features={features}
        bgColor="bg-gray-50"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Implementação especializada para vendas</h2>
              <p className="text-gray-600 mb-6">
                Nossa equipe de especialistas cuida de todo o processo, desde a análise do seu funil de vendas até a implementação e otimização contínua da sua solução.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Análise personalizada do seu processo de vendas</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <Zap size={14} />
                  </div>
                  <span className="ml-3">Desenvolvimento de fluxos de vendas customizados</span>
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
                  <span className="ml-3">Otimização contínua para maximizar vendas</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a href={WHATSAPP_LINKS.automation} className="btn btn-primary">
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
              
              {/* Badge de eficiência */}
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-4 py-3 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-xs">mais vendas</div>
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
              <h2 className="mb-6">Automação que impulsiona vendas</h2>
              <p className="text-gray-600 mb-6">
                Nossas soluções são desenvolvidas para maximizar suas conversões e vendas, com foco em eficiência e ROI.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Qualificação automática de leads 24/7</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Integração com CRM e sistemas de vendas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Nutrição automática de prospects</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                  <span className="ml-3">Relatórios de conversão e vendas detalhados</span>
                </li>
              </ul>
              
              <a href={WHATSAPP_LINKS.automation} className="btn btn-primary">
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
            <h2 className="mb-4">Ideal para diversos segmentos de vendas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Nossa equipe desenvolve soluções personalizadas para diferentes tipos de negócio e estratégias de vendas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Automatize todo o funil de vendas, desde a captação até o pós-venda, com integração completa ao seu sistema.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Catálogo de produtos automático</li>
                <li>• Carrinho de compras pelo WhatsApp</li>
                <li>• Follow-up de vendas automatizado</li>
                <li>• Integração com plataforma de e-commerce</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educação</h3>
              <p className="text-gray-600 mb-4">
                Automatize captação de leads, processo de vendas de cursos e comunicação com alunos.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Qualificação automática de interessados</li>
                <li>• Processo de vendas de cursos</li>
                <li>• Nutrição de leads educacionais</li>
                <li>• Integração com sistema acadêmico</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Imobiliárias</h3>
              <p className="text-gray-600 mb-4">
                Automatize captação de leads, qualificação de interessados e processo de vendas de imóveis.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Catálogo de imóveis automático</li>
                <li>• Qualificação de compradores</li>
                <li>• Agendamento de visitas comerciais</li>
                <li>• Integração com CRM imobiliário</li>
              </ul>
            </div>

            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Saúde e Bem-estar</h3>
              <p className="text-gray-600 mb-4">
                Automatize agendamentos, comunicação com pacientes e vendas de serviços médicos.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Agendamento de consultas e exames</li>
                <li>• Vendas de planos e tratamentos</li>
                <li>• Follow-up pós-consulta</li>
                <li>• Lembretes automáticos</li>
              </ul>
            </div>

            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Utensils size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Restaurantes e Bares</h3>
              <p className="text-gray-600 mb-4">
                Automatize reservas, vendas de delivery e comunicação promocional com clientes.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Reservas de mesas</li>
                <li>• Vendas para delivery/retirada</li>
                <li>• Cardápio digital interativo</li>
                <li>• Campanhas promocionais automáticas</li>
              </ul>
            </div>

            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Serviços Profissionais</h3>
              <p className="text-gray-600 mb-4">
                Automatize qualificação de leads, vendas de serviços e comunicação comercial.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Qualificação automática de leads</li>
                <li>• Agendamento de reuniões comerciais</li>
                <li>• Envio de propostas comerciais</li>
                <li>• Follow-up de vendas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Automatize suas vendas no WhatsApp com especialistas"
        subtitle="Nossa equipe desenvolve e implementa a solução ideal para maximizar suas vendas. Fale com um especialista agora."
        buttonText="Começar agora"
        variant="default"
        linkType="automation"
      />
      
      <FAQSection faqs={faqs} />
    </>
  );
};

export default AIAutomationPage;