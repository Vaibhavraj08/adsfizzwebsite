export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  ADVERTISERS: '/advertisers',
  PUBLISHERS: '/publishers'
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', path: PATHS.HOME },
  { label: 'About', path: PATHS.ABOUT },
  { label: 'Services', path: PATHS.SERVICES },
  { label: 'Advertisers', path: PATHS.ADVERTISERS },
  { label: 'Publishers', path: PATHS.PUBLISHERS },
  { label: 'Contact', path: PATHS.CONTACT }
];