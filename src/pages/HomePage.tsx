import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { 
  Bot, 
  Users,
  MessageSquare,
  Zap,
  Calendar,
  BarChart3,
  Settings,
  Headphones,
  ArrowRight
} from 'lucide-react';
import { WHATSAPP_LINKS } from '../constants';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Bot size={24} />,
      title: 'Automação Especializada',
      description: 'Deixe nossa equipe de especialistas criar fluxos automatizados personalizados para seu negócio.'
    },
    {
      icon: <Users size={24} />,
      title: 'Multi-atendentes',
      description: 'Gerencie sua equipe de atendimento com eficiência, distribuindo conversas de forma inteligente.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Agendamentos',
      description: 'Sistema completo para que seus clientes agendem serviços diretamente pelo WhatsApp.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Relatórios Detalhados',
      description: 'Acompanhe métricas importantes do seu atendimento e tome decisões baseadas em dados.'
    }
  ];
  
  const testimonials = [
    {
      content: 'A equipe do ZyIA desenvolveu uma automação que superou nossas expectativas. O processo foi muito profissional e os resultados são impressionantes.',
      author: 'Ricardo Santos',
      role: 'Diretor Comercial',
      company: 'Tech Solutions',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      content: 'O sistema multi-atendentes revolucionou nosso suporte ao cliente. A organização e eficiência melhoraram significativamente.',
      author: 'Ana Clara',
      role: 'Gerente de Atendimento',
      company: 'Service Pro',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      content: 'Excelente solução! A automação nos ajudou a escalar o atendimento sem perder qualidade, e o suporte da equipe é excepcional.',
      author: 'Paulo Mendes',
      role: 'CEO',
      company: 'Digital Store',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    }
  ];
  
  const faqs = [
    {
      question: 'Como funciona o processo de implementação da automação?',
      answer: 'Nossa equipe de especialistas analisa suas necessidades, desenvolve uma estratégia personalizada e implementa toda a solução para você. Cuidamos de tudo, desde a configuração até o treinamento da sua equipe.'
    },
    {
      question: 'Quanto tempo leva para implementar as soluções?',
      answer: 'O tempo varia conforme a complexidade do projeto. Automações podem ser implementadas em 1-2 semanas, enquanto o sistema multi-atendentes pode ser configurado em até 48 horas.'
    },
    {
      question: 'Oferecem suporte após a implementação?',
      answer: 'Sim! Fornecemos suporte técnico contínuo e acompanhamento para garantir que você aproveite ao máximo nossas soluções. Nossa equipe está sempre disponível para ajustes e melhorias.'
    },
    {
      question: 'É possível integrar com outros sistemas que já utilizamos?',
      answer: 'Sim, nossas soluções são altamente integráveis. Podemos conectar com seu CRM, ERP, e-commerce e outras ferramentas que você já utiliza.'
    }
  ];

  return (
    <>
      <Hero
        title="Transforme seu WhatsApp em uma ferramenta profissional de atendimento"
        subtitle="Soluções completas de automação especializada e atendimento multi-agentes para elevar seu negócio ao próximo nível."
        ctaText="Falar com especialista"
        ctaLink="#contato"
        image="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <FeatureSection
        title="Soluções completas para seu WhatsApp"
        subtitle="Escolha a solução ideal para seu negócio e conte com nossa expertise para implementação e suporte."
        features={features}
      />
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nossas Soluções</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Escolha a solução que melhor atende às necessidades do seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              to="/automacao-ia"
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-primary-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="mb-4">
                  <Settings size={32} className="text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">
                  Automação Especializada
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors">
                  Deixe nossa equipe de especialistas criar automações personalizadas para seu negócio, com implementação completa e suporte contínuo.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700 group-hover:text-white/90 transition-colors">
                    <Zap size={16} className="mr-2" />
                    <span>Implementação por especialistas</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-white/90 transition-colors">
                    <Zap size={16} className="mr-2" />
                    <span>Fluxos personalizados</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-white/90 transition-colors">
                    <Zap size={16} className="mr-2" />
                    <span>Integrações avançadas</span>
                  </li>
                </ul>
                <span className="inline-flex items-center text-primary-500 font-medium group-hover:text-white transition-colors">
                  Saiba mais
                  <ArrowRight size={18} className="ml-2" />
                </span>
              </div>
            </Link>

            <Link 
              to="/atendimento"
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/90 to-secondary-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="mb-4">
                  <Headphones size={32} className="text-secondary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">
                  Atendimento Multi-agentes
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors">
                  Sistema completo para gestão de atendimento com múltiplos agentes, filas, departamentos e muito mais.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700 group-hover:text-white/90 transition-colors">
                    <Zap size={16} className="mr-2" />
                    <span>Gestão de equipe</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-white/90 transition-colors">
                    <Zap size={16} className="mr-2" />
                    <span>Sistema de agendamentos</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-white/90 transition-colors">
                    <Zap size={16} className="mr-2" />
                    <span>Relatórios detalhados</span>
                  </li>
                </ul>
                <span className="inline-flex items-center text-secondary-500 font-medium group-hover:text-white transition-colors">
                  Saiba mais
                  <ArrowRight size={18} className="ml-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <TestimonialSection testimonials={testimonials} />
      
      <CTASection
        title="Pronto para profissionalizar seu atendimento?"
        subtitle="Fale com nossos especialistas e descubra a melhor solução para seu negócio."
        buttonText="Falar com especialista"
        linkType="default"
      />
      
      <FAQSection faqs={faqs} />
    </>
  );
};

export default HomePage;