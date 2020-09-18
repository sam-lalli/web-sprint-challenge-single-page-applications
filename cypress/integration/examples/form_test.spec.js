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
    })
})