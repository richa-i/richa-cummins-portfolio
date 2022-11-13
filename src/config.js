module.exports = {
  siteTitle: "Hitesh Shimpi's Portfolio",
  siteDescription:
    'Hitesh Shimpi is an incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Hitesh Shimpi, Hitesh, Shimpi, hiteshshimpi-55, software engineer, android developer',
  siteUrl: 'https://hiteshshimpi-55.github.io',
  siteImage: 'images/og.png',
  siteLanguage: 'en_US',
  name: 'Hitesh Shimpi',
  location: 'Nasik, India',
  email: 'shimpihitesh2@gmail.com',
  phone: '+919420486908',
  github: 'https://github.com/hiteshshimpi-55',
  linkedIn: 'https://www.linkedin.com/in/hitesh-shimpi-726811161/',
  twitterHandle: '@divyank_00',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hiteshshimpi-55',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hitesh-shimpi-726811161/',
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
