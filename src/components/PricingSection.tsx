import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  popular?: boolean;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="precos\" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Planos e Preços</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Escolha o plano ideal para o seu negócio. Cancele a qualquer momento.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                className={`py-2 px-6 rounded-md text-sm font-medium transition-all ${
                  billingCycle === 'monthly' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Mensal
              </button>
              <button
                className={`py-2 px-6 rounded-md text-sm font-medium transition-all ${
                  billingCycle === 'yearly' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Anual <span className="text-xs text-success-500">-20%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card p-6 border-2 flex flex-col h-full ${
                plan.popular 
                  ? 'border-primary-500 relative' 
                  : 'border-transparent'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                  Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/mês</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-start"
                  >
                    <Check 
                      size={18} 
                      className={`mt-0.5 mr-2 ${
                        feature.included ? 'text-success' : 'text-gray-400'
                      }`} 
                    />
                    <span 
                      className={feature.included ? 'text-gray-800' : 'text-gray-500 line-through'}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <a
                  href="#contato"
                  className={`btn w-full ${
                    plan.popular 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;