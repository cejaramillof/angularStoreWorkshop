// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  platziApi: 'http://platzi-store.herokuapp.com/',
  firebase: {
    apiKey: 'AIzaSyAu8thp-K-WxpwqzFa3R3eqg0SfiGOwX1E',
    authDomain: 'angular-store-63248.firebaseapp.com',
    databaseURL: 'https://angular-store-63248.firebaseio.com',
    projectId: 'angular-store-63248',
    storageBucket: 'angular-store-63248.appspot.com',
    messagingSenderId: '171755092768',
    appId: '1:171755092768:web:480ee6c664b9bb440af545'
  },
  sentryDsn: 'https://181205a0366a4e21bf30eee1690a5ed2@sentry.io/1809062'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
