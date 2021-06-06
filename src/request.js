export const storeData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
  return true;
};

export const getData = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};
