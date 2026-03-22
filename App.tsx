import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandSection from './components/BrandSection';
import ArchitectureSection from './components/ArchitectureSection';
import ReservationForm from './components/ReservationForm';
import AIConcierge from './components/AIConcierge';

const App: React.FC = () => {
  useEffect(() => {
    // Parallax observer logic could go here, for now using pure CSS parallax/fixed bgs
  }, []);

  return (
    <div className="relative antialiased overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Location Section - Full Width Layout */}
        <section id="location" className="bg-[#F5F2ED] py-24">
          <div className="max-w-[1440px] mx-auto px-8 mb-12">
            <div className="inline-block border-b border-[#C5A059] pb-2">
              <h3 className="font-sans text-xl font-bold tracking-tighter text-[#0A192F]">입지환경</h3>
            </div>
          </div>
          <div className="w-full h-[70vh] md:h-[90vh] overflow-hidden">
            <img 
              src="https://ai.esmplus.com/easypick46/%ED%8C%8C%ED%81%AC%EC%82%AC%EC%9D%B4%EB%93%9C%EC%84%9C%EC%9A%B8%205%20%EB%B3%B5%EC%82%AC.jpg" 
              alt="Location View" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        <BrandSection />
        <ArchitectureSection />

        {/* Amenity Highlight Section */}
        <section id="amenity" className="h-[80vh] relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop)' }}
          >
            <div className="absolute inset-0 bg-[#0A192F]/40 flex items-center justify-center">
              <div className="text-center text-white space-y-6 max-w-2xl px-4">
                <h3 className="font-serif text-5xl tracking-widest">THE PARKSIDE SEOUL</h3>
                <p className="text-sm tracking-[0.4em] font-light uppercase">A New Landmark of Seoul</p>
              </div>
            </div>
          </div>
        </section>

        <ReservationForm />
      </main>

      <footer className="bg-[#0A192F] text-[#F5F2ED]/40 py-20 px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h1 className="font-serif text-3xl tracking-[0.3em] font-light text-[#F5F2ED] mb-8">THE PARKSIDE <span className="text-[#C5A059]">SEOUL</span></h1>
            <p className="text-xs leading-relaxed max-w-sm">
              더 파크사이드 서울 | 주식회사 태복플래닝 | 본 사이트의 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] tracking-widest text-[#F5F2ED] font-bold">MENU</p>
            <ul className="text-sm space-y-2">
              <li><a href="#universe" className="hover:text-white transition-colors">사업안내</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">입지환경</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">상품안내</a></li>
              <li><a href="#reservation" className="hover:text-white transition-colors">관심고객등록</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] tracking-widest text-[#F5F2ED] font-bold">LEGAL</p>
            <ul className="text-xs space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] tracking-widest">
          <p>© 2025 THE PARKSIDE SEOUL. ALL RIGHTS RESERVED.</p>
          <p>DEVELOPED BY TAEBOK PLANNING</p>
        </div>
      </footer>

      <AIConcierge />
    </div>
  );
};

export default App;