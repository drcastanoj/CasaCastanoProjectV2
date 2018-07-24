import { Component, Output, EventEmitter } from '@angular/core';
import { FilterStars, IFilterHotel } from './filters.model';


@Component({
  selector: 'app-filter-hotel',
  templateUrl: './filter-hotel.component.html',
  styleUrls: ['./filter-hotel.component.scss']
})
export class FilterHotelComponent {

  public filterStars: FilterStars = new FilterStars();
  public allStars: boolean = true;
  public nameHotel: string;
  public toggle: { filters: boolean; hotelName: boolean; starts: boolean } = {
    filters: true, hotelName: false, starts: false
  };
  @Output() public onFilter: EventEmitter<IFilterHotel> = new EventEmitter();

  public allStarsSelected(): void {
    this.allStars = true;
    this.filterStars['1'] = false;
    this.filterStars['2'] = false;
    this.filterStars['3'] = false;
    this.filterStars['4'] = false;
    this.filterStars['5'] = false;
    this.onFilterEmit([]);
  }

  public filterHotels(): void {
    this.allStars = false;
    const stars: number[] = [];
    for (const i in this.filterStars) {
      if (this.filterStars[i]) {
        stars.push(Number.parseInt(i));
      }
    }
    this.onFilterEmit(stars);
  }

  public onFilterEmit(stars: number[]): void {
    const filteHotel: IFilterHotel = {
      name: this.nameHotel,
      stars: stars.length > 0 ? stars : undefined
    };
    this.onFilter.emit(filteHotel);
  }
}
