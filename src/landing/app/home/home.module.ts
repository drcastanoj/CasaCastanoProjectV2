import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { FilterHotelComponent } from './filter-user/filter-hotel.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';
import { HotelService } from './shared/hotel.service';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    FilterHotelComponent,
    CardHotelComponent
  ],
  providers: [
    HotelService
  ]
})
export class HomeModule { }