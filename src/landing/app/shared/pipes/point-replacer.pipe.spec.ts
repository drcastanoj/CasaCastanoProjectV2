import { } from 'jasmine';
import { PointReplacerPipe } from './point-replacer.pipe';

describe('PointReplacerPipe  ', () => {
    let controller: PointReplacerPipe;
    beforeEach(() => {
        controller = new PointReplacerPipe();

    });
    it('should work', () => {
        expect(controller instanceof PointReplacerPipe).toBe(true, 'should create PointReplacerPipe ');
    });

    describe('Controller transform  ', () => {
        it('should replace comma  ', () => {
            const value: string = controller.transform('1,000');
            expect(value).toBe('1.000');
        });
        it('should return empty string  ', () => {
            const value: string = controller.transform(undefined);
            expect(value).toBe('');
        });
    });

});
