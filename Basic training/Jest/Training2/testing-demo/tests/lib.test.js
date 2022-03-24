const lib = require('../lib.js');
const db = require('../db.js');
const mail = require('../mail.js');
describe('Absolute tests', () => {
    test('Should return a positive number, if inpuit is positive', () =>{
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    test('Should return a positive number, if inpuit is negative', () =>{
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    test('Should return 0, if inpuit is 0', () =>{
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('Greet tests', () => {
    test('Should return the greeting message', () => {
        const result = lib.greet('Anthony');
        // toBe es remplazado por toMatch para hacer los test menos especificos y mas generales por si cambia el codigo
        expect(result).toMatch(/Anthony/);
        expect(result).toContain('Anthony');
    });
});

describe('getCurrencies', () => {
    test('Shoul return supported currencies', () => {
        const result = lib.getCurrencies();

        // Too general
        // expect(result).toBeDefined(); // Not good, not bad
        // expect(result).not.toBeNull(); // Not good, not bad

        //To especific
        // expect(result[0]).toBe('USD'); // Bad
        // expect(result[1]).toBe('AUD'); // Bad
        // expect(result[2]).toBe('EUR'); // Bad

        // Proper way
        // expect(result).toContain('USD');
        // expect(result).toContain('AUD');
        // expect(result).toContain('EUR');

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']));
    });
});

describe('getProduct', () => {
    test('Should return the product with the given id', () => {
        const result = lib.getProduct(1);
        // expect(result).toEqual({ id: 1, price: 10 });
        // toMatchObject. En caso de que al objeto se le agregue una nueva propiedad que el test no tenga, no afectara el test
        expect(result).toMatchObject({ id: 1, price: 10 });
        //  toHaveProperty cuando quiereas verificar que en el objeto exista una propiedad.
        expect(result).toHaveProperty( 'id', 1 );
    })
});

describe('registerUser', () => {
    it('Should throw if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(arg => {
            expect( () => { lib.registerUser(arg) }).toThrow();
        });
    });

    it('Should return a user object if valid username is passed', () => {
        const result = lib.registerUser('Anthony');
        expect(result).toMatchObject({ username: 'Anthony' });
        expect(result.id).toBeGreaterThan(0);
    });
});

describe('applyDiscount', () => {
    it('Should apply 10% discount if customer has more than 10 points', () => {
        db.getCustomerSync = function(customerId) {
            console.log('Fake reading customer...');
            return { id: customerId, points: 20 }
        }

        const order = { customerId: 1, totalPrice:10 };
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9);
    });
});

describe('notifyCustomer', () => {
    it('should send an email to the customer', () => {
        const mockFunction = jest.fn();
        // mockFunction.mockReturnValue(1);
        // mockFunction.mockResolvedValue(1);
        mockFunction.mockRejectValue(new Error('...'));
        const result = await mockFunction();

        db.getCustomerSync = function(customerId) {
            return { email: 'a' }
        }

        let mailSent = false;
        mail.send = function(email, message) {
            mailSent = true;
        }

        lib.notifyCustomer({ customerId: 1 });

        expect(mailSent).toBe(true);
    });
});