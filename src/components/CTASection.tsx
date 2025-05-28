import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  variant?: 'default' | 'dark';
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  buttonText,
  variant = 'default'
}) => {
  const bgClass = variant === 'default' 
    ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
    : 'bg-gray-900';
  
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 text-lg mb-8"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a 
                href={WHATSAPP_LINK}
                className="btn bg-white text-primary-600 hover:bg-white/90 hover:text-primary-700 shadow-lg"
              >
                <MessageCircle size={18} className="mr-2" />
                {buttonText}
                <ArrowRight size={18} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;