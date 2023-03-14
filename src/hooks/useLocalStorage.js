let useLocalStorage = (itemName, initial) => {
  if (localStorage.getItem(itemName) === 'undefined') {
    localStorage.setItem(itemName, JSON.stringify(initial));
    return initial;
  } else {
    return JSON.parse(localStorage.getItem(itemName));
  }
};

export { useLocalStorage };
