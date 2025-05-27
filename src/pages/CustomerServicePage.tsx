import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import WhatsAppDemo from '../components/WhatsAppDemo';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import { 
  Calendar, 
  Users, 
  ClipboardList, 
  BarChart3, 
  MessageSquare,
  Bell,
  Clock,
  Tags
} from 'lucide-react';

const CustomerServicePage: React.FC = () => {
  const features = [
    {
      icon: <Calendar size={24} />,
      title: 'Agendamentos Automatizados',
      description: 'Sistema completo para que clientes marquem horários diretamente pelo WhatsApp.'
    },
    {
      icon: <Users size={24} />,
      title: 'Multi-atendentes',
      description: 'Distribua conversas entre sua equipe com roteamento inteligente baseado em habilidades.'
    },
    {
      icon: <ClipboardList size={24} />,
      title: 'Histórico Completo',
      description: 'Acesse todo o histórico de interações com cada cliente para um atendimento personalizado.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Métricas de Desempenho',
      description: 'Monitore tempo de resposta, satisfação do cliente e eficiência da equipe.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Modelos de Resposta',
      description: 'Crie respostas rápidas para perguntas frequentes e agilize o atendimento.'
    },
    {
      icon: <Bell size={24} />,
      title: 'Lembretes Automáticos',
      description: 'Envie confirmações e lembretes de compromissos para reduzir faltas.'
    }
  ];
  
  const faqs = [
    {
      question: 'Como funciona o sistema de agendamentos?',
      answer: 'Nosso sistema permite que seus clientes consultem a disponibilidade e marquem compromissos diretamente pelo WhatsApp. Você configura seus horários de atendimento, serviços disponíveis e intervalos entre atendimentos, e o sistema gerencia automaticamente sua agenda, evitando conflitos.'
    },
    {
      question: 'É possível definir diferentes tipos de serviços com durações diferentes?',
      answer: 'Sim, você pode cadastrar todos os seus serviços com suas respectivas durações, preços e profissionais responsáveis. O sistema considera essas informações ao mostrar horários disponíveis.'
    },
    {
      question: 'Como são distribuídas as conversas entre a equipe de atendimento?',
      answer: 'Oferecemos diferentes estratégias de distribuição: por disponibilidade, por habilidades específicas, por departamento ou de forma balanceada. Você também pode configurar regras de escalonamento para casos não resolvidos.'
    },
    {
      question: 'Os clientes recebem lembretes automáticos de seus agendamentos?',
      answer: 'Sim! O sistema envia confirmações imediatas após o agendamento e lembretes configuráveis (ex: 1 dia ou 1 hora antes). Você personaliza as mensagens e o timing dos lembretes.'
    },
    {
      question: 'Como gerenciar reagendamentos e cancelamentos?',
      answer: 'Os clientes podem solicitar alterações ou cancelamentos diretamente pelo WhatsApp. O sistema valida a disponibilidade para reagendamentos e aplica suas políticas de cancelamento automaticamente.'
    },
    {
      question: 'É possível integrar com outros sistemas de agenda que já utilizamos?',
      answer: 'Sim, oferecemos integrações com os principais sistemas de agenda do mercado, como Google Calendar, Microsoft Calendar, e diversas soluções específicas para segmentos como saúde e beleza.'
    }
  ];

  return (
    <>
      <Hero
        title="Atendimento e Agendamentos simplificados pelo WhatsApp"
        subtitle="Gerencie sua equipe de atendimento e permita que clientes marquem horários diretamente pelo WhatsApp, sem complicações."
        image="https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        variant="service"
      />
      
      <FeatureSection
        title="Atendimento humano potencializado"
        subtitle="Ferramentas que ajudam sua equipe a oferecer um atendimento excepcional, com agendamentos integrados e gestão eficiente."
        features={features}
        bgColor="bg-gray-50"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6">Agendamentos simplificados</h2>
              <p className="text-gray-600 mb-6">
                Permita que seus clientes consultem disponibilidade e marquem horários sem sair do WhatsApp. 
                Um sistema completo de agendamentos que elimina ligações e otimiza sua agenda.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={14} />
                  </div>
                  <span className="ml-3">Configuração flexível de horários, serviços e profissionais</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={14} />
                  </div>
                  <span className="ml-3">Lembretes automáticos para reduzir faltas e atrasos</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={14} />
                  </div>
                  <span className="ml-3">Confirmações, reagendamentos e cancelamentos automáticos</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={14} />
                  </div>
                  <span className="ml-3">Integração com Google Calendar, Outlook e outros sistemas</span>
                </li>
              </ul>
              
              <a href="#demo" className="btn btn-primary">
                Ver demonstração
              </a>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Agendamento pelo WhatsApp" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-accent-500 mr-2" />
                  <span className="font-medium">Agendamento confirmado!</span>
                </div>
                <p className="text-sm text-gray-600">
                  Seu horário foi agendado para 15/Mar às 14:00. Enviaremos um lembrete 2h antes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppDemo demoType="service" />
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/7439146/pexels-photo-7439146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Multi-atendimento" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="mb-6">Gerenciamento eficiente de equipe</h2>
              <p className="text-gray-600 mb-6">
                Distribua conversas entre sua equipe, monitore desempenho e ofereça um atendimento 
                coordenado e eficiente, mesmo com múltiplos atendentes.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <span className="ml-3">Distribuição inteligente de conversas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <span className="ml-3">Transferência de atendimentos entre departamentos</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <span className="ml-3">Supervisão e monitoramento em tempo real</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <span className="ml-3">Métricas de desempenho e produtividade</span>
                </li>
              </ul>
              
              <a href="#contato" className="btn btn-primary">
                Falar com especialista
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
              Nossa solução de atendimento e agendamentos se adapta às necessidades específicas de diferentes tipos de negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Tags size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Saúde e Bem-estar</h3>
              <p className="text-gray-600 mb-4">
                Clínicas médicas, consultórios, academias e profissionais de saúde podem gerenciar consultas e retornos com eficiência.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Prontuários integrados</li>
                <li>• Lembretes de preparo para exames</li>
                <li>• Confirmação automática de consultas</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Tags size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Beleza e Estética</h3>
              <p className="text-gray-600 mb-4">
                Salões, barbearias e clínicas de estética podem gerenciar múltiplos profissionais e serviços.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Agendamento por profissional</li>
                <li>• Venda de produtos pelo WhatsApp</li>
                <li>• Gestão de pacotes e fidelidade</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Tags size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Serviços Profissionais</h3>
              <p className="text-gray-600 mb-4">
                Advogados, contadores, consultores e outros profissionais podem organizar reuniões e consultorias.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Reuniões com duração variável</li>
                <li>• Coleta prévia de informações</li>
                <li>• Documentos integrados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Organize sua agenda e potencialize seu atendimento"
        subtitle="Comece agora mesmo a oferecer agendamentos pelo WhatsApp e gerencie sua equipe com eficiência."
        buttonText="Solicitar demonstração"
        variant="dark"
      />
      
      <FAQSection faqs={faqs} />
      
      <ContactForm />
    </>
  );
};

export default CustomerServicePage;