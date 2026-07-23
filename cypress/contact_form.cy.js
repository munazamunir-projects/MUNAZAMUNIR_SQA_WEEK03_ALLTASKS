describe('Contact Form Testing', () => {


  beforeEach(() => {

    cy.visit('http://127.0.0.1:5500/index.html')

  })


  // Positive Test
  it('Should submit contact form with valid data', () => {


    cy.get('#name')
      .type('Munaza Munir')


    cy.get('#email')
      .type('munaza@gmail.com')


    cy.get('#message')
      .type('Testing contact form')


    cy.get('#submitBtn')
      .click()


    cy.get('#successMessage')
      .should('be.visible')
      .and('contain', 'Message sent successfully!')


  })



  // Negative Test
  it('Should show validation when fields are empty', () => {


    cy.get('#submitBtn')
      .click()


    cy.get('#name')
      .then(($input)=>{

        expect($input[0].validationMessage)
        .to.not.equal('')

      })


  })


})