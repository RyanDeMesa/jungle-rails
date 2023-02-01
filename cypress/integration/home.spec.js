describe('Jungle Home Page', () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit root", () => {
    cy.visit("/");
  });


  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There is 3 products on the page", () => {
    cy.get(".products article").should("have.length", 3);
  });


});