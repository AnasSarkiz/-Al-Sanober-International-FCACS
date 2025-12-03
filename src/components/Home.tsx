import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import homeImage from '../assets/home.png';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="home" className={`py-20 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">{t('companyName')}</h1>
        <p className="text-lg text-green-700 mb-8 max-w-2xl mx-auto">{t('shortDescription')}</p>
        <div className="mb-8">
          <img
            src={homeImage}
            alt="Company"
            className="mx-auto rounded-lg shadow-lg border-4 border-green-200"
          />
        </div>
        <div className="flex justify-center mx-5 space-x-4">
          <a
            href="tel:+966123456789"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            {t('call')}
          </a>
          <a
            href="mailto:info@alsanober.com"
            className="bg-green-600 text-white  px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            {t('email')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;