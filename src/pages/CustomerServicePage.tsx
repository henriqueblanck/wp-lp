import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import WhatsAppDemo from '../components/WhatsAppDemo';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import { 
  Calendar, 
  Users, 
  ClipboardList, 
  BarChart3, 
  MessageSquare,
  Bell,
  Clock,
  Tags,
  Bot,
  ArrowRight,
  CheckCircle,
  Zap,
  Headphones,
  MessageCircle
} from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const CustomerServicePage: React.FC = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: 'Multi-atendentes',
      description: 'Distribua conversas entre sua equipe com roteamento inteligente.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Agendamentos',
      description: 'Sistema completo para que clientes marquem horários pelo WhatsApp.'
    },
    {
      icon: <Bot size={24} />,
      title: 'Chatbot Integrado',
      description: 'Automatize respostas frequentes e qualifique leads 24/7.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Métricas Detalhadas',
      description: 'Acompanhe tempo de resposta, satisfação e eficiência da equipe.'
    },
    {
      icon: <Bell size={24} />,
      title: 'Notificações',
      description: 'Alertas de novas mensagens e distribuição inteligente.'
    },
    {
      icon: <ClipboardList size={24} />,
      title: 'Gestão Completa',
      description: 'Histórico, tags, notas e informações dos clientes.'
    },
    {
      icon: <Headphones size={24} />,
      title: 'Filas e Departamentos',
      description: 'Organize o atendimento por setores e prioridades.'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Respostas Rápidas',
      description: 'Templates personalizados para agilizar o atendimento.'
    }
  ];
  
  const faqs = [
    {
      question: 'Como funciona o período de teste grátis?',
      answer: 'Oferecemos 7 dias de teste grátis com todas as funcionalidades disponíveis. Não é necessário cartão de crédito para começar. Você poderá testar o sistema completo com sua equipe.'
    },
    {
      question: 'Quantos atendentes posso ter?',
      answer: 'Oferecemos planos flexíveis que se adaptam ao tamanho da sua equipe. Você pode começar com poucos atendentes e aumentar conforme sua necessidade. Cada atendente tem acesso individual ao sistema.'
    },
    {
      question: 'É possível usar com múltiplos números de WhatsApp?',
      answer: 'Sim! Você pode conectar vários números de WhatsApp e gerenciar todos através de uma única interface. Ideal para empresas com diferentes departamentos ou unidades.'
    },
    {
      question: 'Como funciona a integração com meu site?',
      answer: 'Fornecemos um widget personalizado para seu site que direciona as conversas diretamente para o sistema. Também é possível integrar através de API para soluções mais específicas.'
    },
    {
      question: 'Oferece suporte para instalação?',
      answer: 'Sim! Nossa equipe oferece suporte completo para configuração inicial, treinamento da sua equipe e ajustes conforme suas necessidades. Também disponibilizamos materiais de treinamento e documentação detalhada.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Básico',
      price: 'R$ 147',
      description: 'Ideal para pequenas empresas',
      features: [
        '2 usuários',
        '1 número de WhatsApp',
        'Chat multiagentes',
        'Chatbot básico',
        'Relatórios essenciais'
      ]
    },
    {
      name: 'Profissional',
      price: 'R$ 297',
      description: 'Para empresas em crescimento',
      features: [
        '5 usuários',
        '2 números de WhatsApp',
        'Chat multiagentes',
        'Chatbot avançado',
        'Relatórios completos',
        'API de integração'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Sob consulta',
      description: 'Soluções personalizadas',
      features: [
        'Usuários ilimitados',
        'Números ilimitados',
        'Chat multiagentes',
        'Chatbot personalizado',
        'Relatórios avançados',
        'API completa',
        'Suporte prioritário'
      ]
    }
  ];

  return (
    <>
      <Hero
        title="Sistema Profissional de Atendimento para WhatsApp"
        subtitle="Gerencie sua equipe, automatize respostas e ofereça um atendimento excepcional com nossa plataforma completa."
        image="https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        variant="service"
      />
      
      <FeatureSection
        title="Plataforma completa de atendimento"
        subtitle="Todas as ferramentas que sua equipe precisa para oferecer um atendimento excepcional pelo WhatsApp."
        features={features}
        bgColor="bg-gray-50"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Atendimento multiagentes</h2>
              <p className="text-gray-600 mb-6">
                Distribua as conversas entre sua equipe de forma inteligente, monitore o desempenho 
                e ofereça um atendimento profissional e organizado.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="ml-3">Distribuição inteligente de conversas</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="ml-3">Chatbot para primeiro atendimento</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="ml-3">Histórico completo de conversas</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="ml-3">Relatórios e métricas de atendimento</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a href={WHATSAPP_LINK} className="btn btn-primary">
                  Ver planos e preços
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Atendimento Multiagentes" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="precos" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Planos e Preços</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Escolha o plano ideal para seu negócio. Todos os planos incluem 7 dias de teste grátis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`card p-6 flex flex-col ${
                  plan.popular ? 'border-2 border-primary-500 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                    Mais popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Sob consulta' && <span className="text-gray-600 ml-2">/mês</span>}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Zap size={16} className="text-success mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={WHATSAPP_LINK}
                  className={`btn w-full ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  Começar teste grátis
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Precisa de um plano personalizado? {' '}
              <a href={WHATSAPP_LINK} className="text-primary-500 hover:underline">
                Fale com nossa equipe
              </a>
            </p>
          </div>
        </div>
      </section>
      
      <WhatsAppDemo demoType="service" />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Gestão de Equipe" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="mb-6">Gestão completa de atendimento</h2>
              <p className="text-gray-600 mb-6">
                Todas as ferramentas que sua equipe precisa para oferecer um atendimento 
                excepcional, com controle total e métricas detalhadas.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <span className="ml-3">Gestão de filas e departamentos</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <span className="ml-3">Tags e categorização de conversas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <span className="ml-3">Avaliação de satisfação do cliente</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <span className="ml-3">Dashboard de performance em tempo real</span>
                </li>
              </ul>
              
              <a href={WHATSAPP_LINK} className="btn btn-primary">
                Começar teste grátis
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Comece seu teste grátis hoje mesmo"
        subtitle="7 dias grátis com todas as funcionalidades. Sem compromisso."
        buttonText="Começar agora"
        variant="dark"
      />
      
      <FAQSection faqs={faqs} />
    </>
  );
};

export default CustomerServicePage;