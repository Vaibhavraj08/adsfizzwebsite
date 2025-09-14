export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  ADVERTISERS: '/Advertisers',
  PUBLISHERS: 'https://adsfizzdigital.offer18.com/m/signup_self_aff?r=&am='
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', path: PATHS.HOME },
  { label: 'About', path: PATHS.ABOUT },
  { label: 'Services', path: PATHS.SERVICES },
  { label: 'Contact', path: PATHS.CONTACT },
  { label: 'Advertisers', path: PATHS.ADVERTISERS },
  { label: 'Publishers', path: PATHS.PUBLISHERS }
  
];