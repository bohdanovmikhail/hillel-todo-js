import { parseHEX } from './parse-hex';

describe('parseHEX function', () => {

    it('parseHEX must be function', () => {
        const type = typeof parseHEX;

        expect(type).toBe('function');
    });

    it('should return array', () => {
        const result = parseHEX('#000000');

        expect(result).toBeInstanceOf(Array);
    });

    it('should return red color', () => {
        const result = parseHEX('#ff0000');

        expect(result).toEqual([255, 0, 0]);
    });

    it('should return null when color is wrong value', () => {
        const result = parseHEX('#');

        expect(result).toBeNull();
    });

    xit('should return null when color is object', () => {
        const result = parseHEX({});

        expect(result).toBeNull();
    });
});
