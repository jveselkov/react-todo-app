import { Filters } from "@/widgets/hooks";

const titles: string[] = ["title 1", "title 2", "title 3", "title 4"];

const addTodos = (titles: string[]) => {
  titles.forEach((title) => {
    cy.get("@inputTitle").type(title);
    cy.get("@addButton").click();
  });
};

const testTodosContent = (titles: string[]) => {
  cy.get("div[data-cy=todo-item]")
    .should("have.length", titles.length)
    .each((item, index) => {
      cy.wrap(item).within(() => {
        cy.contains("span[data-cy=todo-content]", titles[index]);
      });
    });
};

describe("add todo test and reload page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button[type=submit]").as("addButton");
    cy.get("input#content").as("inputTitle");
  });

  it("should add todos and reload page", () => {
    addTodos(titles);
    testTodosContent(titles);

    cy.get("span[data-cy=todos-counter]").contains(titles.length.toString());

    cy.reload();

    testTodosContent(titles);
  });

  it("should add todos, set done on first and remove it", () => {
    addTodos(titles);

    cy.get("div[data-cy=todo-check-icon]").first().click();

    cy.get("button[data-cy=remove-completed]").click();
    const [, ...otherTitles] = titles;

    testTodosContent(otherTitles);
  });

  it("should show completed and undone", () => {
    addTodos(titles);

    cy.get("div[data-cy=todo-check-icon]").first().click();
    cy.get("div[data-cy=todo-check-icon]").last().click();

    cy.get("div").contains(Filters.Active).click();
    const active = [titles[1], titles[2]];
    testTodosContent(active);

    cy.get("div").contains(Filters.Completed).click();
    const completed = [titles[0], titles[3]];
    testTodosContent(completed);

    cy.get("div").contains(Filters.All).click();
    testTodosContent(titles);

    cy.get("span[data-cy=todos-counter]").contains(active.length.toString());
  });
});
