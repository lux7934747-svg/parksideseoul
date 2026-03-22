
import { NavItem, SectionId } from './types';

export const COLORS = {
  NAVY: '#0A192F',
  GOLD: '#C5A059',
  SAND: '#F5F2ED',
  WARM_GREY: '#8C847E',
  DEEP_BROWN: '#2D2926',
};

export const NAV_ITEMS: NavItem[] = [
  { id: SectionId.UNIVERSE, label: '사업안내' },
  { id: SectionId.LOCATION, label: '입지환경' },
  { id: SectionId.PRODUCT, label: '상품안내' },
  { id: SectionId.RESERVATION, label: '관심고객등록' },
];

export const CONTENT = {
  universe: {
    title: 'A NEW UNIVERSE',
    subtitle: '단순한 부촌을 넘어선 독보적인 세계의 창조',
    description: '서울 최초의 MXD(Mixed-use Development) 단지로서 주거, 오피스, 리테일, 그리고 로즈우드 서울 호텔이 결합된 하이엔드 라이프스타일 플랫폼입니다.',
  },
  location: {
    title: 'The Heart of Seoul',
    site: '용산구 한남동 (구 수송부 부지)',
    view: '용산공원의 영구 조망과 한강, 남산을 잇는 압도적 입지 가치',
  }
};
