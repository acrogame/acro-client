import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AcroClientComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from '@angular/router';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AcroClientComponent, [
  FIREBASE_PROVIDERS,
  ROUTER_PROVIDERS,
  defaultFirebase('https://acrogame.firebaseio.com') 
]);
