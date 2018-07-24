import { } from 'jasmine';
import { HomeComponent } from './home.component';
import { HotelService } from './shared/hotel.service';
import { of } from 'rxjs';
import { IHotel } from './shared/hotel.model';

describe('HomeComponent  ', () => {
    let controller: HomeComponent;
    let hotelService: HotelService;
    beforeEach(() => {
        hotelService = new HotelService(undefined);
        controller = new HomeComponent(hotelService);
        spyOn(hotelService, 'getHotel').and.returnValue(of([
            <IHotel>{
                name: '',
                id: '',
                stars: 3,
                price: 5454,
                image: '',
                amenities: []
            }
        ]));

    });
    it('should work', () => {
        expect(controller instanceof HomeComponent).toBe(true, 'should create Home ');
    });

    describe('Controller ngOnInit  ', () => {
        it('should call hotelService.getHotel and set  hotels  ', () => {
            controller.ngOnInit();
            expect(hotelService.getHotel).toHaveBeenCalledTimes(1);
            expect(controller.hotels).toEqual([{
                name: '',
                id: '',
                stars: 3,
                price: 5454,
                image: '',
                amenities: []
            }]);

        });
    });

});
