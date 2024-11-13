import { ITodoItem } from "@/entities/TodoItem";

import { useMemo, useState } from "react";

export const useTodos = (initialTodos: ITodoItem[]) => {
  const [todos, setTodos] = useState<ITodoItem[]>(initialTodos);

  const createTodo = (title: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        done: false,
      },
    ]);
  };

  const updateTodo = (todo: ITodoItem) => {
    setTodos((todos) =>
      todos.map((item) => (item.id !== todo.id ? item : todo))
    );
  };

  const removeDoneTodos = () => {
    setTodos((todos) => todos.filter((item) => !item.done));
  };

  const toggleDoneTodo = (id: string) => {
    const todo = todos.find((item) => item.id === id);

    if (!todo) {
      return;
    }

    updateTodo({
      ...todo,
      done: !todo.done,
    });
  };

  const undoneTodosCount = useMemo(
    () => todos.filter((todo) => !todo.done)?.length || 0,
    [todos]
  );

  return {
    todos,
    setTodos,
    createTodo,
    updateTodo,
    toggleDoneTodo,
    removeDoneTodos,
    undoneTodosCount,
  };
};
