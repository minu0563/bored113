export interface portfolioItem {
    id: number;
    name: string;
    imgSrc: string;
    link: string;
    color: string; 
}

export const portfolioItems: portfolioItem[] = [
  {
    id: 1,
    name: 'Kwak Do Young',
    imgSrc: '/kwak.jpg',
    link: '/aboutpage/KwakDoYoung',
    color: 'red',
  },
  {
    id: 2,
    name: 'Park Ju Hyun',
    imgSrc: '/park.jpg',
    link: '/aboutpage/ParkJuHyun',
    color: 'blue',
  },
];