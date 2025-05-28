import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowSolutions(false);
  }, [location.pathname]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const solutions = [
    { title: 'Automação Especializada', path: '/automacao-ia', description: 'Automatize seu atendimento com IA' },
    { title: 'Atendimento Multi-agentes', path: '/atendimento', description: 'Gerencie sua equipe de atendimento' }
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="ZyIA" className="h-11 w-auto -m-2" />
              <span className="text-xl font-bold ml-1">ZyIA</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center ml-12">
              <div 
                className="relative"
                onMouseEnter={() => setShowSolutions(true)}
                onMouseLeave={() => setShowSolutions(false)}
              >
                <button 
                  className="text-sm font-medium hover:text-primary-500 transition-colors flex items-center px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  Soluções
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${showSolutions ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showSolutions && (
                  <div className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-white shadow-xl py-3 border border-gray-100">
                    {solutions.map((solution, index) => (
                      <Link
                        key={index}
                        to={solution.path}
                        className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${
                          location.pathname === solution.path ? 'text-primary-500 bg-primary-50' : 'text-gray-800'
                        }`}
                      >
                        <span className="block font-medium">{solution.title}</span>
                        <span className="text-sm text-gray-500">{solution.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Falar com especialista
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-900 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 p-4"
        >
          <div className="flex flex-col space-y-3">
            <div className="font-medium text-gray-900 mb-2">Soluções</div>
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.path}
                className={`block p-3 rounded-lg ${
                  location.pathname === solution.path 
                    ? 'bg-primary-50 text-primary-500' 
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="block font-medium">{solution.title}</span>
                <span className="text-sm text-gray-500">{solution.description}</span>
              </Link>
            ))}
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4 text-center"
            >
              Falar com especialista
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;