export const APP_CONFIG = {
   name: {
      long: 'Mandarify Security',
      short: 'Security'
   },
   domain: 'https://security.mandarify.org/',
   lang: {
      pattern: ':lang',
      default: 'ru',
      supported: ['ru', 'en'],
      country: 'DE',
      localStorageName: 'language'
   },
   path: {
      home: ':lang',
      generator: ':lang/password-generator',
      reliability: ':lang/password-reliability',
      blog: ':lang/blog',
      notFound: '404',
   },
   og: {
      type: {
         home: 'website',
         generator: 'website',
         reliability: 'website',
         blog: 'website',
         notFound: 'website',
      }
   }
};