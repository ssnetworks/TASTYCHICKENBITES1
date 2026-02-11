import type { ComponentType } from 'react';
import { Drumstick, Sparkles } from 'lucide-react';

export type MenuItem = {
  id: string;
  name: string;
  priceSingle?: number;
  singleServing?: string;
  priceFull?: number;
  fullServing?: string;
  imageId: string;
  icon: ComponentType<{ className?: string }>;
};

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Chicken Popcorn',
    priceSingle: 100,
    priceFull: 180,
    imageId: 'chicken-popcorn',
    icon: Drumstick,
  },
  {
    id: '2',
    name: 'Chicken Wings',
    priceSingle: 120,
    singleServing: '3p',
    priceFull: 220,
    fullServing: '6p',
    imageId: 'chicken-wings',
    icon: Drumstick,
  },
  {
    id: '3',
    name: 'Chicken Lollipop',
    priceSingle: 110,
    singleServing: '1p',
    priceFull: 200,
    fullServing: '4p',
    imageId: 'chicken-lollipop',
    icon: Drumstick,
  },
  {
    id: '4',
    name: 'Chicken Strips',
    priceSingle: 130,
    singleServing: '3p',
    priceFull: 240,
    fullServing: '6p',
    imageId: 'chicken-strips',
    icon: Drumstick,
  },
  {
    id: '5',
    name: 'Chicken Pakodi',
    priceSingle: 90,
    priceFull: 160,
    imageId: 'chicken-pakodi',
    icon: Drumstick,
  },
  {
    id: '6',
    name: 'French Fries',
    priceSingle: 80,
    priceFull: 150,
    imageId: 'french-fries',
    icon: Sparkles,
  },
  {
    id: '7',
    name: 'Perry Perry French Fries',
    priceSingle: 100,
    priceFull: 180,
    imageId: 'perry-perry-fries',
    icon: Sparkles,
  },
];
