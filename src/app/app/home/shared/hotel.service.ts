import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';
import { IFilterHotel } from '../filter-user/filters.model';
import { HttpClient } from '@angular/common/http';
import { IHotel } from './hotel.model';
import { AppSettings } from '../../app.setting';
@Injectable()
export class HotelService {

  constructor(private http: HttpClient) { };

  public getHotel(filter: IFilterHotel): Observable<Object | IHotel[]> {
    const url: string = AppSettings.SERVER_URL + 'hotel?';
    let filterName: string = '';
    let filterStars: string = '';
    if (filter) {
      filterName = filter.name ? `&filter[name]=${filter.name}` : '';
      filterStars = filter.stars ? `&filter[stars]=[${filter.stars}]` : '';
    }
    return this.http.get(url + filterName + filterStars);

  }
}