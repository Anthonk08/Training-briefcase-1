describe('email validation', () => {
    test('This is an email', () => {
        const email = 'raul@email.com'

        expect(email).toMatch(/\S+@\S+\.\S+/)
    })

    test('This is not an email', () => {
        const email = 'raulemail.com'

        expect(email).not.toMatch(/\S+@\S+\.\S+/)
    })
})