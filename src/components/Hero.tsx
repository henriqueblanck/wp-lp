import React from 'react';
import { ArrowRight, MessageCircle, MessageSquare, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  image?: string;
  variant?: 'default' | 'ai' | 'service';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Começar agora',
  image = 'https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  variant = 'default'
}) => {
  // Define different background gradients based on variant
  const gradientBg = {
    default: 'bg-gradient-to-br from-white via-primary-50 to-white',
    ai: 'bg-gradient-to-br from-white via-secondary-50 to-white',
    service: 'bg-gradient-to-br from-white via-accent-50 to-white',
  };

  // Define different icon sets based on variant
  const IconComponent = {
    default: MessageCircle,
    ai: Bot,
    service: MessageSquare,
  }[variant];

  return (
    <section className={`relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden ${gradientBg[variant]}`}>
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-300 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 mb-6">
              <IconComponent size={16} className="mr-2" />
              <span className="text-sm font-medium">WhatsApp Inteligente</span>
            </div>
            
            <h1 className="mb-6">
              {title}
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              {subtitle}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt="WhatsApp Service" 
                className="w-full h-auto rounded-2xl"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-whatsapp flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">ZyIA</p>
                    <p className="text-xs text-gray-500">Automação Inteligente para WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full filter blur-xl opacity-60 floating-element"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-100 rounded-full filter blur-xl opacity-60 floating-element" style={{ animationDelay: '2s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;