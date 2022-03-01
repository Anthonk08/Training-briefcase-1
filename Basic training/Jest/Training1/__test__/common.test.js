import { sum } from '../src/suma.js';

test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4)
})

test('Object validation', () => {
    const data = {username: 'Anthony Tineo'}
    const data2 = {username: 'Anthony'}

    expect(data).toEqual({username: 'Anthony Tineo'});
    expect(data).not.toEqual(data2);
})