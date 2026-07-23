describe('Portfolio Website Testing', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  it('Should load portfolio homepage successfully', () => {

    cy.title()
      .should('not.be.empty')

    cy.url()
      .should('include', 'index.html')

  })

})