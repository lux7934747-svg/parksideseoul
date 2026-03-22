
export interface NavItem {
  id: string;
  label: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  time: string;
  privacy: boolean;
}

export enum SectionId {
  HERO = 'hero',
  UNIVERSE = 'universe',
  LOCATION = 'location',
  PRODUCT = 'product',
  RESERVATION = 'reservation'
}
