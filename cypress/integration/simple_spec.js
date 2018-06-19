describe('My Second Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('https://example.cypress.io')

      cy.contains('focus').click()
      cy.url().should('include', '/commands/actions')
    })
  })