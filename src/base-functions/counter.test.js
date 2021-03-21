import { Counter } from './counter';

describe('Counter class', () => {
    let instance;

    beforeAll(() => {
        instance = new Counter();
    });

    afterEach(() => {
        instance.value = 0;
    });

    it('instance has value', () => {
        expect(instance).toHaveProperty('value');
    });

    it('instance has increment and decrement methods', () => {
        expect(instance).toHaveProperty('increment');
        expect(instance).toHaveProperty('decrement');
    });

    it('should value be 3 when increment calls 3 times', () => {
        instance.increment();
        instance.increment();
        instance.increment();

        expect(instance.value).toEqual(3);
    });

    it('should value be -2 when decrement calls 2 times', () => {
        instance.decrement();
        instance.decrement();

        expect(instance.value).toEqual(-2);
    });

    xdescribe('test increment and decrement', () => {
        let middleValue;

        beforeAll(() => {
            middleValue = instance.value;
        });

        beforeEach(() => {
            instance.value = middleValue;
        });

        afterEach(() => {
            middleValue = instance.value;
        });

        it('increment calls 1 time', () => {
            instance.increment();

            expect(instance.value).toBe(1);
        });

        it('increment calls 2 times', () => {
            instance.increment();
            instance.increment();

            expect(instance.value).toBe(3);
        });

        it('decrement calls 4 times', () => {
            instance.decrement();
            instance.decrement();
            instance.decrement();
            instance.decrement();

            expect(instance.value).toBe(-1);
        });
    });
    
    xit('call increment and decrement several times', () => {
        instance.increment();

        expect(instance.value).toBe(1);

        instance.increment();
        instance.increment();

        expect(instance.value).toBe(3);

        instance.decrement();
        instance.decrement();
        instance.decrement();
        instance.decrement();

        expect(instance.value).toBe(-1);
    });
});
