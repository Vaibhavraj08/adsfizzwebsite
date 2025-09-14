

export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  ADVERTISERS: '/advertisers', // use lowercase and match folder/file name
  PUBLISHERS: '/publishers'    // use lowercase and match folder/file name
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', path: PATHS.HOME },
  { label: 'About', path: PATHS.ABOUT },
  { label: 'Services', path: PATHS.SERVICES },
  { label: 'Contact', path: PATHS.CONTACT },
  { label: 'Advertisers', path: PATHS.ADVERTISERS },
  { label: 'Publishers', path: PATHS.PUBLISHERS }
];

