import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { HomeModule } from '../home.module';
import { CardHotelComponent } from './card-hotel.component';
import { APP_BASE_HREF } from '@angular/common';

describe('Card Hotel Component  ', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HomeModule

            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });
    });
    it('should work', () => {
        const fixture: ComponentFixture<CardHotelComponent> = TestBed.createComponent(CardHotelComponent);
        expect(fixture.componentInstance instanceof CardHotelComponent).toBe(true, 'should create Header');
    });

    describe('Controller ngOnInit  ', () => {
        it('should create array for stars', () => {
            const fixture: ComponentFixture<CardHotelComponent> = TestBed.createComponent(CardHotelComponent);
            const controller: CardHotelComponent = fixture.componentInstance;
            controller.hotel = {
                name: '',
                stars: 3,
                price: 500,
                amenities: [],
                id: '54',
                image: ''
            };
            controller.ngOnInit();
            expect(controller.stars.length).toBe(3);
        });
    });

});
