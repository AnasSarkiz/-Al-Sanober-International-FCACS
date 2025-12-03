import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className={`bg-white shadow-md p-4 border-b-4 border-green-500 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-green-800">
          {t('companyName')}
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="text-green-700 hover:text-green-900"
          >
            {t('home')}
          </button>
          <button
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-green-700 hover:text-green-900"
          >
            {t('about')}
          </button>
          <button
            onClick={toggleLanguage}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;