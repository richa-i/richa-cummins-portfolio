module.exports = {
  siteTitle: 'Richa Singh\'s Portfolio',
  siteDescription:
    'Richa Singh is an incoming Software Developer, based in India, who loves learning new things and exploring technologies.',
  siteKeywords: 'Richa Singh, Richa, Singh, richa-i, software engineer, android developer',
  siteUrl: 'https://richa-i.github.io',
  siteImage: 'images/og.png',
  siteLanguage: 'en_US',
  name: 'Richa Singh',
  location: 'Nagpur, India',
  email: 'richasingh43202@gmail.com',
  phone: '+919834015962',
  github: 'https://github.com/richa-i',
  linkedIn: 'http://www.linkedin.com/in/richa-singh-213473232',
  // twitterHandle: '@divyank_00',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/richa-i',
    },
    {
      name: 'Linkedin',
      url: 'http://www.linkedin.com/in/richa-singh-213473232',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact Me',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
