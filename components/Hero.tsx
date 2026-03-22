
import React from 'react';
import Section from './Section';

const Hero: React.FC = () => {
  return (
    <Section id="hero" className="justify-center items-center text-center px-4 relative min-h-screen">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: 'url(https://ai.esmplus.com/easypick46/%ED%8C%8C%ED%81%AC%EC%82%AC%EC%9D%B4%EB%93%9C%EC%84%9C%EC%9A%B8.jpg)' }}
      >
        <div className="absolute inset-0 bg-[#0A192F]/50"></div>
      </div>
      
      <div className="relative z-10 text-white space-y-6 animate-fade-in-up">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
          THE PARKSIDE <br /> <span className="text-[#C5A059]">SEOUL</span>
        </h2>
        <div className="space-y-1">
          <p className="text-lg md:text-2xl font-light tracking-tighter opacity-90">
            서울의 정점, 단 하나의 유니버스
          </p>
          <p className="text-lg md:text-2xl font-light tracking-tighter opacity-90">
            파크사이드 서울, 그 첫 번째 주거 '더 파크사이드 스위트'
          </p>
        </div>
      </div>

      {/* Points Section at the bottom */}
      <div className="absolute bottom-12 left-0 w-full z-10 px-8 hidden md:block">
        <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-4 text-white border-t border-white/20 pt-8">
          <div className="space-y-2 text-left">
            <p className="text-[11px] font-bold tracking-tighter text-[#C5A059]">PERFECT MXD</p>
            <p className="text-[13px] font-light tracking-tighter opacity-80">완벽을 넘어선 복합 주거의 정수</p>
          </div>
          <div className="space-y-2 text-left">
            <p className="text-[11px] font-bold tracking-tighter text-[#C5A059]">PARK ETERNITY</p>
            <p className="text-[13px] font-light tracking-tighter opacity-80">용산공원, 영구히 소유하는 녹음</p>
          </div>
          <div className="space-y-2 text-left">
            <p className="text-[11px] font-bold tracking-tighter text-[#C5A059]">ROSEWOOD CARE</p>
            <p className="text-[13px] font-light tracking-tighter opacity-80">글로벌 럭셔리 로즈우드</p>
          </div>
          <div className="space-y-2 text-left">
            <p className="text-[11px] font-bold tracking-tighter text-[#C5A059]">GRAND SCALER</p>
            <p className="text-[13px] font-light tracking-tighter opacity-80">39,000㎡ 압도적 스케일의 몰</p>
          </div>
        </div>
      </div>

      {/* Mobile Points (Simplified) */}
      <div className="absolute bottom-8 left-0 w-full z-10 px-6 md:hidden">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] text-white/60 tracking-tighter">
          <span>PERFECT MXD</span>
          <span>•</span>
          <span>PARK ETERNITY</span>
          <span>•</span>
          <span>ROSEWOOD CARE</span>
          <span>•</span>
          <span>GRAND SCALER</span>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
