Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Bruna')
    cy.get('#lastName').type('Valadares')
    cy.get('#email').type('brunavaladares@gmail.com')
    cy.get('#open-text-area').type('teste e teste')
    cy.contains('button', 'Enviar').click()
})