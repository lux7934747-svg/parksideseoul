
import React from 'react';
import Section from './Section';
import { CONTENT } from '../constants';

const BrandSection: React.FC = () => {
  return (
    <Section id="universe" className="bg-[#F5F2ED] py-32 px-8 flex flex-col md:flex-row gap-20 items-center max-w-[1440px] mx-auto">
      <div className="w-full md:w-1/2 space-y-10">
        <div className="space-y-2">
          <p className="text-[#C5A059] tracking-widest text-xs font-bold uppercase">Introduction</p>
          <h3 className="font-serif text-5xl leading-tight">사업안내</h3>
          <p className="text-[#8C847E] text-lg font-light tracking-wide italic">
            {CONTENT.universe.subtitle}
          </p>
        </div>
        
        <div className="space-y-6 text-lg leading-relaxed text-[#2D2926] font-light max-w-md">
          <p>
            서울 최초의 MXD(Mixed-use Development) 단지로서 주거, 오피스, 리테일, 그리고 로즈우드 서울 호텔이 결합된 하이엔드 라이프스타일 플랫폼입니다. 
            주거를 넘어선 오피스, 리테일, 그리고 세계적인 럭셔리 호텔 '로즈우드 서울'이 선사하는 독보적인 경험을 만나보십시오.
          </p>
          <p>
            주거·호텔·리테일·오피스·문화시설이 한 곳에, 대규모 MXD 단지에서의 완성형 도시 라이프. 
            주거, 호텔, 리테일, 오피스, 문화가 어우러지는 이곳은 단순한 주거를 넘어 
            도심 속 원스톱 라이프와 서울의 아이코닉한 랜드마크를 실현합니다.
          </p>
        </div>

        <div className="pt-10 border-t border-[#D4C4B5] inline-block">
          <p className="font-serif text-2xl tracking-wide italic">Rosewood Seoul</p>
          <p className="text-[10px] tracking-widest uppercase mt-2">Ultra-Luxury Hotel Service Integrated</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative">
        <img 
          src="https://ai.esmplus.com/easypick46/%ED%8C%8C%ED%81%AC%EC%82%AC%EC%9D%B4%EB%93%9C%EC%84%9C%EC%9A%B8%202.png" 
          alt="Luxury Hotel Interior" 
          className="w-full h-[600px] object-cover shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-10 -right-10 bg-[#0A192F] p-8 shadow-xl hidden lg:block text-white">
          <p className="text-xs tracking-[0.3em] font-bold text-[#C5A059]">THE FIRST MXD</p>
        </div>
      </div>
    </Section>
  );
};

export default BrandSection;
