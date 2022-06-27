import React from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  /* Importamos de React el hook useEffect */
  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    setItem(parsedItem);
  }, []);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  /* Aqui estabas devolviendo un array*/
  /* Como son varioas props devuelves un objeto  */
  return {
    item,
    saveItem,
  };
}
