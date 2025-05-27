import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const navLinks = [
    { title: 'Início', path: '/' },
    { title: 'Automação com IA', path: '/automacao-ia' },
    { title: 'Atendimento', path: '/atendimento' },
    { title: 'Preços', path: '/#precos' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <MessageCircle className="h-8 w-8 text-whatsapp mr-2" />
          <span className="text-xl font-bold">ZapFlow</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium hover:text-primary-500 transition-colors ${
                (location.pathname === link.path || 
                 (link.path.includes('#') && location.pathname + link.path.substring(1) === link.path)) 
                  ? 'text-primary-500' 
                  : 'text-gray-800'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Link to="/#contato" className="btn btn-primary">
            Começar agora
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-900 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-base font-medium py-2 px-4 rounded-md hover:bg-gray-100 ${
                  location.pathname === link.path ? 'text-primary-500' : 'text-gray-800'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Link 
              to="/#contato" 
              className="btn btn-primary mt-4 text-center"
            >
              Começar agora
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;