import { } from 'jasmine';
import { HotelService } from './hotel.service';
import { of } from 'rxjs';


describe('HotelService   ', () => {
    let controller: HotelService;
    let httpMock: { get: Function };
    beforeEach(() => {
        httpMock = {
            get: () => { }
        };
        spyOn(httpMock, 'get').and.returnValue(of({}));
        // tslint:disable-next-line
        controller = new HotelService(httpMock as any);

    });
    it('should work', () => {
        expect(controller instanceof HotelService).toBe(true, 'should create Hotel service');
    });

    describe('Controller getHotel  ', () => {
        it('should get url  without filters ', () => {
            controller.getHotel(undefined);
            expect(httpMock.get).toHaveBeenCalledTimes(1);
            expect(httpMock.get).toHaveBeenCalledWith('/api/hotel?');
        });
        it('should get url  without filters ', () => {
            controller.getHotel({
                name: 'name',
                stars: [1, 2, 3, 4, 5]
            });
            expect(httpMock.get).toHaveBeenCalledTimes(1);
            expect(httpMock.get).toHaveBeenCalledWith('/api/hotel?&filter[name]=name&filter[stars]=[1,2,3,4,5]');
        });

        it('should get url  without name filter ', () => {
            controller.getHotel({
                name: undefined,
                stars: [1, 2, 3, 4, 5]
            });
            expect(httpMock.get).toHaveBeenCalledTimes(1);
            expect(httpMock.get).toHaveBeenCalledWith('/api/hotel?&filter[stars]=[1,2,3,4,5]');
        });

        it('should get url  without name filter ', () => {
            controller.getHotel({
                name: 'name',
                stars: undefined
            });
            expect(httpMock.get).toHaveBeenCalledTimes(1);
            expect(httpMock.get).toHaveBeenCalledWith('/api/hotel?&filter[name]=name');
        });
    });


});
