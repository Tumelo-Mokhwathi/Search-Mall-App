// https://docs.cypress.io/api/introduction/api.html

describe("home page test on landing", () => {
  it("Map selection button should show correct text after click", () => {
    cy.visit("https://vccoverage.afrigis.co.za/#/");
    cy.contains("select hybrid").click();
    cy.contains("select vector");
  });
  it("search option button showing abc| after click", () => {
    cy.visit("https://vccoverage.afrigis.co.za/#/");
    cy.contains("x:y").click();
    cy.contains("abc |");
  });
  it("when typing text it should include evrithing with the text", () => {
    cy.visit("https://vccoverage.afrigis.co.za/#/");
    cy.get(".input-group-append.h-100 > .form-control").type("rigel");
    cy.get(".list-group > :nth-child(1)").contains("Rigel");
  });
  it("when clicking Search button a line with search charecters should appear", () => {
    cy.visit("https://vccoverage.afrigis.co.za/#/");
    cy.get(".input-group-append.h-100 > .form-control").type("mamasr");
    cy.get(".input-group-append > .btn").click();
    cy.get(".list-group > :nth-child(1)").contains(/[mamasr]/);
  });
});
