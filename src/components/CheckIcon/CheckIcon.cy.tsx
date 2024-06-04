import { CheckIcon } from "./CheckIcon";

describe("CheckIcon tests", () => {
  it("should mount checked", () => {
    cy.mount(<CheckIcon check />);
    cy.get("div[data-cy=check-container]")
      .get("span[data-cy=check-icon]")
      .get("svg");
  });
  it("should mount unchecked", () => {
    cy.mount(<CheckIcon check={false} />);
    cy.get("div[data-cy=check-container]")
      .get("span[data-cy=check-icon]")
      .should("not.exist");
  });

  it("when CheckIcon is clicked, should call onClick", () => {
    cy.mount(<CheckIcon onClick={cy.spy().as("onClick")} />);

    cy.get("div[data-cy=check-container]").click();
    cy.get("@onClick").should("have.been.called");
  });
});
