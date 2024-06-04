import { ITodoItem } from "@/types";

import { useMemo, useState } from "react";

export const Filters = {
  All: "All",
  Active: "Active",
  Completed: "Completed",
} as const;

export type TFilters = keyof typeof Filters;

export const FilterValues = [Filters.All, Filters.Active, Filters.Completed];

export const useFilteredTodos = (todos: ITodoItem[]) => {
  const [filters, setFilters] = useState<TFilters>(Filters.All);

  const filteredTodos = useMemo(() => {
    if (filters === Filters.Active) {
      return todos.filter((todo) => !todo.done);
    }

    if (filters === Filters.Completed) {
      return todos.filter((todo) => todo.done);
    }

    return todos;
  }, [todos, filters]);

  return { filteredTodos, setFilters };
};
