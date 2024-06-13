import { TodoItem } from "./TodoItem";

const todoItem = {
  id: "item-id",
  title: "title",
  done: false,
};

describe("TodoItem tests", () => {
  it("TodoItem ", () => {
    cy.mount(<TodoItem item={todoItem} />);

    cy.get("span[data-cy=todo-content]").contains(todoItem.title);
  });

  it("TodoItem should call onClick", () => {
    cy.mount(<TodoItem item={todoItem} onClick={cy.spy().as("onClick")} />);

    cy.get("div[data-cy=todo-check-icon]").click();

    cy.get("@onClick").should("have.been.called");
  });

  it("TodoItem should call onEdit ", () => {
    cy.mount(<TodoItem item={todoItem} onEdit={cy.spy().as("onEdit")} />);

    const value = "modify";

    cy.get("div[data-cy=todo-item]").within(() => {
      cy.get("span[data-cy=todo-content]").click();

      cy.get("textarea").as("textarea");

      cy.get("@textarea").type(value);

      cy.get("@textarea").type("{enter}");

      cy.get("@onEdit").should("have.been.calledWith", todoItem.title + value);
    });
  });
});
