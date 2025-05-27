import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import WhatsAppDemo from '../components/WhatsAppDemo';
import { 
  MessageSquare, 
  Bot, 
  Calendar, 
  BarChart3, 
  Globe, 
  Smartphone,
  Shield,
  Zap
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Bot size={24} />,
      title: 'Automação com IA',
      description: 'Atenda seus clientes 24/7 com respostas automatizadas e personalizadas usando IA avançada.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Agendamentos',
      description: 'Permita que seus clientes marquem horários diretamente pelo WhatsApp, sem complicações.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Multi-atendentes',
      description: 'Distribua conversas entre sua equipe e gerencie múltiplos atendimentos simultaneamente.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Relatórios e Análises',
      description: 'Acompanhe métricas de desempenho, tempo de resposta e satisfação dos clientes.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Fluxos de Conversão',
      description: 'Crie jornadas de conversão que direcionam clientes de forma eficiente para vendas.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Multi-dispositivos',
      description: 'Acesse e gerencie suas conversas de qualquer lugar, em qualquer dispositivo.'
    }
  ];
  
  const testimonials = [
    {
      content: 'O ZapFlow transformou completamente nosso atendimento ao cliente. Conseguimos automatizar 70% das perguntas frequentes e aumentamos nossas vendas em 35% em apenas 3 meses.',
      author: 'Carlos Silva',
      role: 'Gerente de Marketing',
      company: 'TechStore',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      content: 'Nosso salão de beleza agora tem agendamentos totalmente automatizados via WhatsApp. Reduziu em 90% as ligações para marcação e praticamente eliminou os no-shows!',
      author: 'Amanda Martins',
      role: 'Proprietária',
      company: 'Belle Salon',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      content: 'Os fluxos de automação com IA são incríveis! Nossos clientes nem percebem que estão falando com um bot, e conseguimos qualificar leads de forma muito mais eficiente.',
      author: 'Marcos Oliveira',
      role: 'Diretor Comercial',
      company: 'Nexus Imóveis',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4
    }
  ];
  
  const pricingPlans = [
    {
      name: 'Básico',
      price: 'R$97',
      description: 'Ideal para pequenos negócios que estão começando.',
      features: [
        { text: '1 número de WhatsApp', included: true },
        { text: 'Até 1.000 mensagens/mês', included: true },
        { text: 'Atendimento automatizado', included: true },
        { text: 'Fluxos de conversação básicos', included: true },
        { text: 'Agendamentos simples', included: true },
        { text: 'Integrações com IA', included: false },
        { text: 'Multi-atendentes', included: false },
        { text: 'API para integrações', included: false }
      ],
      ctaText: 'Começar grátis',
      popular: false
    },
    {
      name: 'Profissional',
      price: 'R$197',
      description: 'Perfeito para negócios em crescimento que precisam de mais recursos.',
      features: [
        { text: '3 números de WhatsApp', included: true },
        { text: 'Até 5.000 mensagens/mês', included: true },
        { text: 'Atendimento automatizado', included: true },
        { text: 'Fluxos de conversação avançados', included: true },
        { text: 'Sistema completo de agendamentos', included: true },
        { text: 'Integrações com IA', included: true },
        { text: 'Até 5 atendentes', included: true },
        { text: 'API para integrações', included: false }
      ],
      ctaText: 'Selecionar plano',
      popular: true
    },
    {
      name: 'Empresarial',
      price: 'R$397',
      description: 'Para empresas que necessitam de recursos avançados e alta escala.',
      features: [
        { text: '10 números de WhatsApp', included: true },
        { text: 'Até 20.000 mensagens/mês', included: true },
        { text: 'Atendimento automatizado', included: true },
        { text: 'Fluxos de conversação ilimitados', included: true },
        { text: 'Sistema completo de agendamentos', included: true },
        { text: 'Integrações com IA avançadas', included: true },
        { text: 'Atendentes ilimitados', included: true },
        { text: 'API completa para integrações', included: true }
      ],
      ctaText: 'Fale com vendas',
      popular: false
    }
  ];
  
  const faqs = [
    {
      question: 'O que é o ZapFlow?',
      answer: 'ZapFlow é uma plataforma completa para automação de WhatsApp, que combina atendimento com IA, agendamentos e fluxos de conversação para otimizar o relacionamento com seus clientes.'
    },
    {
      question: 'Preciso instalar algum aplicativo?',
      answer: 'Não é necessário instalar nenhum aplicativo. O ZapFlow funciona diretamente no navegador, e a integração com o WhatsApp é feita através do WhatsApp Web ou API oficial.'
    },
    {
      question: 'Posso usar com múltiplos números de WhatsApp?',
      answer: 'Sim! Dependendo do seu plano, você pode integrar múltiplos números de WhatsApp à plataforma, gerenciando todos em um único painel.'
    },
    {
      question: 'Como funciona o sistema de agendamentos?',
      answer: 'Nosso sistema permite que seus clientes consultem horários disponíveis e marquem compromissos diretamente pelo WhatsApp. Você define seus horários de atendimento, serviços e disponibilidade, e o sistema gerencia tudo automaticamente.'
    },
    {
      question: 'A IA realmente entende o que meus clientes perguntam?',
      answer: 'Sim! Utilizamos modelos avançados de IA que compreendem linguagem natural e contexto. A plataforma aprende com as interações e melhora continuamente, permitindo atendimento automatizado com qualidade próxima à humana.'
    },
    {
      question: 'É possível integrar com outros sistemas?',
      answer: 'Absolutamente! Oferecemos API e webhooks para integrar com CRMs, e-commerces, ERPs e outras ferramentas. Nos planos mais avançados, você tem acesso completo a todas as possibilidades de integração.'
    },
    {
      question: 'Como é feita a cobrança?',
      answer: 'A cobrança é feita mensalmente, com opção de pagamento anual com desconto. Você pode alterar ou cancelar seu plano a qualquer momento.'
    }
  ];

  return (
    <>
      <Hero
        title="Transforme seu WhatsApp em uma ferramenta de crescimento"
        subtitle="Automatize atendimentos, crie fluxos inteligentes e ofereça agendamentos diretamente pelo WhatsApp. Tudo em uma única plataforma."
        ctaText="Começar agora"
        image="https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <FeatureSection
        title="Tudo que você precisa para o WhatsApp profissional"
        subtitle="Nossa plataforma reúne as ferramentas essenciais para transformar o WhatsApp em seu principal canal de vendas e atendimento."
        features={features}
      />
      
      <WhatsAppDemo demoType="ai" />
      
      <TestimonialSection testimonials={testimonials} />
      
      <PricingSection plans={pricingPlans} />
      
      <CTASection
        title="Pronto para revolucionar seu WhatsApp?"
        subtitle="Junte-se a milhares de empresas que já transformaram seu atendimento. Comece hoje mesmo!"
        buttonText="Falar com um especialista"
      />
      
      <FAQSection faqs={faqs} />
      
      <ContactForm />
    </>
  );
};

export default HomePage;