
import React from 'react';

const AIConcierge: React.FC = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button 
        onClick={scrollToReservation}
        className="w-16 h-16 bg-[#0A192F] text-[#C5A059] rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-all group"
      >
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-tighter">분양문의</span>
        </div>
      </button>
    </div>
  );
};

export default AIConcierge;
