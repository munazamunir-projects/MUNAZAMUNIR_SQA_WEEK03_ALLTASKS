describe('Portfolio Navigation Testing', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })


  it('Should navigate to About section successfully', () => {

    cy.contains('About')
      .click()

    cy.url()
      .should('include', '#about')

  })


  it('Should navigate to Education section successfully', () => {

    cy.contains('Education')
      .click()

    cy.url()
      .should('include', '#education')

  })


  it('Should navigate to Skills section successfully', () => {

    cy.contains('Skills')
      .click()

    cy.url()
      .should('include', '#skills')

  })


  it('Should verify navigation links exist', () => {

    cy.contains('Home')
      .should('be.visible')

    cy.contains('About')
      .should('be.visible')

    cy.contains('Education')
      .should('be.visible')

    cy.contains('Skills')
      .should('be.visible')

    cy.contains('Goals')
      .should('be.visible')

    cy.contains('Contact')
      .should('be.visible')

  })

})