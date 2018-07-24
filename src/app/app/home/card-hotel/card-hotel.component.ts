import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../shared/hotel.model';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent implements OnInit {

  @Input() public hotel: IHotel;
  public stars: number[];

  constructor() { }

  public ngOnInit(): void {
    this.stars = new Array(this.hotel.stars).map((x, i) => i);
  }
}
