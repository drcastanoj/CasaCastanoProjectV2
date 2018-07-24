import { } from 'jasmine';
import { FilterHotelComponent } from './filter-hotel.component';

describe('FilterHotelComponent   ', () => {
    let controller: FilterHotelComponent;
    beforeEach(() => {
        controller = new FilterHotelComponent();
        spyOn(controller.onFilter, 'emit').and.returnValue({});

    });
    it('should work', () => {
        expect(controller instanceof FilterHotelComponent).toBe(true, 'should create Filter hotel');
    });

    describe('Controller filterHotels  ', () => {
        it('should send start 1, 2 3  ', () => {
            controller.filterStars['1'] = true;
            controller.filterStars['2'] = true;
            controller.filterStars['3'] = true;
            controller.filterHotels();
            expect(controller.onFilter.emit).toHaveBeenCalledTimes(1);
            expect(controller.onFilter.emit).toHaveBeenCalledWith({
                name: undefined,
                stars: [1, 2, 3]
            });

        });

        it('should send name whithout stars ', () => {
            controller.filterStars['1'] = false;
            controller.filterStars['2'] = false;
            controller.filterStars['3'] = false;
            controller.nameHotel = 'name';
            controller.filterHotels();
            expect(controller.onFilter.emit).toHaveBeenCalledTimes(1);
            expect(controller.onFilter.emit).toHaveBeenCalledWith({
                name: 'name',
                stars: undefined
            });

        });
    });

    describe('Controller allStarsSelected  ', () => {
        it('should send start undefined  ', () => {
            controller.allStarsSelected();
            expect(controller.onFilter.emit).toHaveBeenCalledTimes(1);
            expect(controller.onFilter.emit).toHaveBeenCalledWith({
                name: undefined,
                stars: undefined
            });

        });
        it('should set stars in false', () => {
            controller.filterStars['1'] = true;
            controller.filterStars['2'] = true;
            controller.filterStars['3'] = true;
            controller.filterStars['4'] = true;
            controller.filterStars['5'] = true;
            controller.allStarsSelected();
            expect(controller.filterStars['1']).toBe(false);
            expect(controller.filterStars['2']).toBe(false);
            expect(controller.filterStars['3']).toBe(false);
            expect(controller.filterStars['4']).toBe(false);
            expect(controller.filterStars['5']).toBe(false);
        });
        it('should set allStars in true', () => {
            controller.allStars = false;
            controller.allStarsSelected();
            expect(controller.allStars).toBe(true);
        });
    });

});
