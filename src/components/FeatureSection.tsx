import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  reversed?: boolean;
  bgColor?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
  reversed = false,
  bgColor = 'bg-white'
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className={`section ${bgColor}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${reversed ? 'md:flex-row-reverse' : ''}`}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card p-6 flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;