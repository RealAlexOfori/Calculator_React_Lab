describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to have number buttons update the display of the running total', () => {
    cy.get('#number1').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '17')
  })

  it('should be able to have arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4')
  })

  it('should output as expected for positve numbers', () => {
    cy.get('#number7').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '72')
  })

  it('should output as expected for negative numbers', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should output as expected for decimal numbers', () => {
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12.1')
  })

  it('should output as expected for very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9801')
  })
  
  it('should be able to divide by zero', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Division Error')
  })
})