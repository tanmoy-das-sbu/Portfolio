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
      <div id="google_translate_element" className='flex justify-end ml-[9%] mr-[9%]'></div>
      
    </div>
  );
};

export default TranslatePage;
