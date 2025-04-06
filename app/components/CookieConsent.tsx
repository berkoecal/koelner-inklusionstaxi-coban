"use client";

import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const handleDecline = () => {
    // You might want to implement limited functionality mode here
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <div className='mb-4 md:mb-0 md:mr-4'>
          <p>
            Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Durch das Weitersurfen
            stimmen Sie der Verwendung von Cookies zu.
            <a href='/datenschutz' className='underline ml-1'>
              Mehr erfahren
            </a>
          </p>
        </div>
        <div className='flex space-x-4'>
          <button
            onClick={handleDecline}
            className='px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors'
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className='px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition-colors'
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
