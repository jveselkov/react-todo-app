import { ITodoItem } from "@/entities";
import { useTodos } from "./useTodos";

import { saveDataToStorage, getDataFromStorage } from "@/shared";
import { useEffect } from "react";

export const useStoredTodos = () => {
  const todosHookProps = useTodos(getDataFromStorage<ITodoItem>());

  useEffect(() => {
    saveDataToStorage(todosHookProps.todos);
  }, [todosHookProps.todos]);

  return todosHookProps;
};
