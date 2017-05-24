// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCxDDIb51o2JYS0_S6hrIe3lweYRq7XemA',
    authDomain: 'vv-bill-manager.firebaseapp.com',
    databaseURL: 'https://vv-bill-manager.firebaseio.com',
    projectId: 'vv-bill-manager',
    storageBucket: 'vv-bill-manager.appspot.com',
    messagingSenderId: '230346116302'
  }
};
