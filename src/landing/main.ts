import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import './main.scss';

// imports all hotel images
// tslint:disable-next-line
declare var require: any;
require.context('assets/img/hotels/', false, /\.(png|jpe?g|svg)$/);

if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);