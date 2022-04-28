describe('TodoMVC', function() {
  beforeEach(function() {
    // Load our app before starting each test case
    cy.visit('localhost:8080')
  })

  it('Loads the TodoMVC app', function() {
    cy.visit('localhost:8080')
    //cy.percySnapshot()
  })




})
