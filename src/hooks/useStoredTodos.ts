import { ITodoItem } from "@/types";
import { useTodos } from "./useTodos";

import { saveDataToStorage, getDataFromStorage } from "@/utils";
import { useEffect } from "react";

export const useStoredTodos = () => {
  const todosHookProps = useTodos(getDataFromStorage<ITodoItem>());

  useEffect(() => {
    saveDataToStorage(todosHookProps.todos);
  }, [todosHookProps.todos]);

  return todosHookProps;
};
