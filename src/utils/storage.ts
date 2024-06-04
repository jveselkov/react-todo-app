const storageKey = "Todos-key" as const;

export const saveDataToStorage = (notes: unknown) => {
  localStorage.setItem(storageKey, JSON.stringify(notes));
};

export const getDataFromStorage = <T>(): T[] => {
  const storedData = localStorage.getItem(storageKey);

  if (!storedData) {
    return [];
  }

  return JSON.parse(storedData) as T[];
};
