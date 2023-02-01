describe('Jungle Product Details Page', () => {
  
  beforeEach(() => {
    cy.visit("/");
  });

  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There is 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });

  // test that users can navigate from the home page to the product details page
  it("Shows product/show", () => {
    cy.get(".products article").first().click();
    cy.get('.btn').contains("Add");
  });
  
});