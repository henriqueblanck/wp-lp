import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand and description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="ZyIA" className="h-11 w-auto" />
              <span className="ml-2 text-xl font-bold">ZyIA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforme seu atendimento no WhatsApp com soluções inteligentes de automação e agendamento.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-end items-end">
            <p className="text-gray-400 text-sm">
              Desenvolvido com ♥ no Brasil
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ZyIA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;