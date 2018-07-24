import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PointReplacerPipe } from './pipes/point-replacer.pipe';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    PointReplacerPipe
  ],
  exports: [
    PointReplacerPipe
  ]
})
export class SharedModule { }
