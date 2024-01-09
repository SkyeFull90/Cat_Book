describe('Creates a new Cat', () => {
    it('Should create a new cat', () => {
        cy.visit('/upload')
        cy.get('input[type="text"]').type('testing')
    })
})