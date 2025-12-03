import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer id="footer" className={`bg-green-800 text-white py-10 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-200">{t('about')}</h3>
            <p className="text-green-100">{t('footerAbout')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-200">{t('email')}</h3>
            <p className="text-green-100">{t('emailAddress')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-200">{t('call')}</h3>
            <p className="text-green-100">{t('phone')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-200">Location</h3>
            <p className="text-green-100">{t('location')}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-600 text-center">
          <p className="text-green-100">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;