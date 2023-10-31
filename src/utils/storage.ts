export const getFromStorage = (key: string) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};

export const setToStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
