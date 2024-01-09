describe('Register a new user',  () => {
    it('Should register a new user', () => {
        cy.visit('/register')
        cy.get('input[type="text"]').type('testing')
        cy.get('input[type="password"]').type('test321')
        cy.get('button').contains('Submit').click()
    })
})