import React, { useEffect } from 'react';

const TranslatePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      };
    }
  }, []);
  return (
    <div >
      <div id="google_translate_element" className='flex md:justify-start xs:justify-start lg: mr-[9%] '>
        <style>
        {
          `
          
          .VIpgJd-ZVi9od-ORHb-OEVmcd{
            z-index:0
          }`
        }
        </style>
      </div>
      
    </div>
  );
};

export default TranslatePage;
