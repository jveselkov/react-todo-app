describe("app e2e2 test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render home page with card title", () => {
    cy.get("div.ant-card-head-title").should("have.text", "todos");
  });
});
