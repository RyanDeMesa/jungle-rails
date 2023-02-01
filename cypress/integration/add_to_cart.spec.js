describe('Jungle Add to cart', () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit root", () => {
    cy.visit("/");
  });

  xit("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  xit("There is 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });

  it("Updates the cart once 'add to cart' is clicked", () => {
    cy.get(".products article div .btn").first().click({force: true});
    cy.get('#navbarSupportedContent > :nth-child(2) > :nth-child(4) > .nav-link').should("include.text", "My Cart (1)");
  });


});