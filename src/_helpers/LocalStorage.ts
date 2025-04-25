const localStorage = window.localStorage;

export const save = (key: string, data: Record<string, any>) =>
  localStorage.setItem(key, JSON.stringify(data));
