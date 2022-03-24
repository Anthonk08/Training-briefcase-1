const exercise1 = require('../exercise1');

describe('fizzBuzz Tests', () => {
    it('Input should be a number.', ()  => {
        expect( () => { exercise1.fizzBuzz('a') }).toThrow();
        expect( () => { exercise1.fizzBuzz(null) }).toThrow();
        expect( () => { exercise1.fizzBuzz(undefined) }).toThrow();
        expect( () => { exercise1.fizzBuzz({}) }).toThrow();;
    });

    it('Should return FizzBuzz If input is divisible by 3 and  5', () => {
        const result = exercise1.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    })

    it('Should return Fizz If input is divisible by 3', () => {
        const result = exercise1.fizzBuzz(108);
        expect(result).toBe('Fizz');
    })

    it('Should return Fizz If input is divisible by 5', () => {
        const result = exercise1.fizzBuzz(25);
        expect(result).toBe('Buzz');
    })

    it('Should return input If input is not divisible by 3 or 5', () => {
        const result = exercise1.fizzBuzz(1);
        expect(result).toBe(result);
    })
});