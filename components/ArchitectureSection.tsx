
import React from 'react';
import Section from './Section';
import { 
  Hotel, 
  Compass, 
  Building2, 
  ShoppingBag, 
  Key, 
  Home, 
  Music, 
  Sparkles 
} from 'lucide-react';

const ArchitectureSection: React.FC = () => {
  const products = [
    {
      icon: <Hotel className="w-12 h-12 text-[#8C7A6B] opacity-80" />,
      titleEn: "ROSEWOOD SEOUL",
      titleKo: "로즈우드 서울",
      description: "국내 최초로 선보이는\n세계적 명성의 울트라 럭셔리 호텔"
    },
    {
      icon: <Compass className="w-12 h-12 text-[#8C7A6B] opacity-80" />,
      titleEn: "THE PARKSIDE WAY",
      titleKo: "더파크사이드 웨이",
      description: "단지 중앙을 가로지르며 이태원과 용산공원을 연결하는 <span class='text-[#8C7A6B] font-medium'>330m</span> 보행로"
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#8C7A6B] opacity-80" />,
      titleEn: "BUSINESS CENTER",
      titleKo: "비즈니스 센터",
      description: "스마트 업무시스템을 갖춘\n친환경 오피스"
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-[#8C7A6B] opacity-80" />,
      titleEn: "THE PARKSIDE MALL",
      titleKo: "더파크사이드 몰",
      description: "엄선된 샵들로 큐레이팅될\n하이엔드 상업시설"
    },
    {
      icon: <Key className="w-12 h-12 text-[#8C7A6B] opacity-80" />,
      titleEn: "THE PARKSIDE SUITES",
      titleKo: "더파크사이드 스위트",
      description: "로즈우드서울의 서비스를 누리는\n<span class='text-[#8C7A6B] font-medium'>775세대</span>의 하이엔드 주거시설"
    },
    {
      icon: <Home className="w-12 h-12 text-[#8C7A6B] opacity-80" />,
      titleEn: "APARTMENTS",
      titleKo: "아파트먼트",
      description: "더파크사이드 스위트\n아파트먼트"
    },
    {
      icon: <Music className="w-12 h-12 text-[#8C7A6B] opacity-80" />,
      titleEn: "ART&CULTURE SPACE",
      titleKo: "아트&컬처 스페이스",
      description: "아트홀 및 유명 갤러리들로 채워질\n예술과 문화의 공간"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-[#8C7A6B] opacity-80" />,
      titleEn: "UN PLAZA",
      titleKo: "유엔 플라자",
      description: "지역의 유산과 다양한 문화가 어우러져,\n일상이 축제가 되는 광장"
    }
  ];

  return (
    <Section id="product" className="bg-[#F9F8F6] py-32 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`
                p-16 flex flex-col items-center text-center transition-colors duration-300 hover:bg-[#F2EFEA]
                border-[#E5E3DC]
                ${index % 2 === 0 ? 'md:border-r' : ''}
                ${index < products.length - 2 ? 'border-b' : 'max-md:border-b'}
                ${index === products.length - 2 ? 'max-md:border-b' : ''}
              `}
            >
              <div className="mb-6">
                {product.icon}
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold tracking-wider text-[#2B3238] mb-2 uppercase">
                {product.titleEn}
              </h3>
              <h4 className="font-['Nanum_Myeongjo'] text-lg font-bold text-[#2B3238] mb-4">
                {product.titleKo}
              </h4>
              <p 
                className="font-['Noto_Sans_KR'] text-[0.95rem] font-light leading-relaxed text-[#4A4A4A] whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ArchitectureSection;
