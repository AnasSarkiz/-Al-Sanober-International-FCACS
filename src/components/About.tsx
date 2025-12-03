import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className={`py-20 bg-green-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">{t('about')}</h2>
        <p className="text-lg text-green-700 max-w-3xl mx-auto text-center">{t('aboutStory')}</p>
      </div>
    </section>
  );
};

export default About;