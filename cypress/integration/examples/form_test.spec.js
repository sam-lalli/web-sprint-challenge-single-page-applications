describe('Pizza App', () => {
    beforeEach(() => {
      // before each test
      cy.visit('http://localhost:3000')
    })

    it('test to make sure it works', () =>{
        expect(1+2).to.equal(3)
    })

    it('can navigate to pizza form and fill out form', () =>{
        cy.get('a[name=pizzaBtn]').click()
        cy.get('input[name=order_name]')
        .should('have.value', '')
        .type('testUser')
        cy.get('select[name=size]').select('medium')
        cy.get('input[name=instructions')
        .type('leave at door')
        cy.get('input[name=pepperoni]').click()
        cy.get('input[name=peppers]').click()
        cy.get('input[name=sausage]').click()
        cy.get('input[name=save]').click()
        cy.get('button').click()
    })
})