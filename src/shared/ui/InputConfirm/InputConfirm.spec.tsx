import { InputConfirm } from "./InputConfirm";

describe("InputConfirm tests", () => {
  it("when InputConfirm is empty should not call onConfirm", () => {
    cy.mount(<InputConfirm onConfirm={cy.spy().as("onConfirm")} />);

    cy.get("button[type=submit]").click();
    cy.get("@onConfirm").should("have.not.been.called");
  });

  it("when InputConfirm is empty should call onConfirm with value", () => {
    cy.mount(<InputConfirm onConfirm={cy.spy().as("onConfirm")} />);

    const value = "title";

    cy.get("input").type(value);

    cy.get("button[type=submit]").click();
    cy.get("@onConfirm").should("have.been.calledWith", value);
  });
});
