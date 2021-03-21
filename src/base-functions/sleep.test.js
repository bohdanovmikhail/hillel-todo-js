import { sleep } from './sleep';

describe('sleep function', () => {
    test('should be a function', () => {
        expect(typeof sleep).toBe('function');
    });

    test('should wait 10 seconds', async () => {
        const start = Date.now();
        await sleep(4000);
        const end = Date.now();

        expect(end - start).toBeGreaterThan(4000);
    });
});


async function run() {
    console.log('before');
    await sleep(3000);
    console.log('after');
}
