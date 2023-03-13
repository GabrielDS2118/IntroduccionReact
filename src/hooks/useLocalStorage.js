let useLocalStorage = (itemName, initial) => {
  if (!localStorage.getItem(itemName)) {
    localStorage.setItem('DATA', JSON.stringify(initial));
    return initial;
  } else {
    return JSON.parse(localStorage.getItem(itemName));
  }
};

export { useLocalStorage };
