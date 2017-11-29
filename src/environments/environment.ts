// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCrC6CWqyl1yqgBMxa_vIiSMJNRVBstrQ8',
    authDomain: 'noodles-hub.firebaseapp.com',
    databaseURL: 'https://noodles-hub.firebaseio.com',
    projectId: 'noodles-hub',
    storageBucket: '',
    messagingSenderId: '78471936493'
  }
};
