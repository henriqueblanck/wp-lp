import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AIAutomationPage from './pages/AIAutomationPage';
import CustomerServicePage from './pages/CustomerServicePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="automacao-ia" element={<AIAutomationPage />} />
        <Route path="atendimento" element={<CustomerServicePage />} />
      </Route>
    </Routes>
  );
}

export default App;