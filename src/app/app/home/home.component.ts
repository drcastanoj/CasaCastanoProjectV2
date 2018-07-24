import { Component, OnInit } from '@angular/core';
import { HotelService } from './shared/hotel.service';
import { IHotel } from './shared/hotel.model';
import { IFilterHotel } from './filter-user/filters.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hotels: IHotel[];

  constructor(private hotelService: HotelService) { }


  public ngOnInit(): void {
    this.loadHotels();
  }

  public loadHotels(filter?: IFilterHotel): void {
    this.hotelService.getHotel(filter).subscribe((result) => {
      this.hotels = result as IHotel[];
    });
  }
}
