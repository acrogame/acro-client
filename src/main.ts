import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AcroClientApp, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AcroClientApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://acrogame.firebaseio.com') 
]);

