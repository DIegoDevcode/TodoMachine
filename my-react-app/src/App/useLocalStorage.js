import React from "react";

 function useLocalStorage(itemName, initialValue) { 
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);
   
    /* Importamos de React el hook useEffect */
    React.useEffect(() => {
      setTimeout(() => {
        try {
          /* ItemName is a TodoV1*/
          const localStorageItem = localStorage.getItem(itemName); 
          let parsedItem;
        
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
          sincronizedItem(true);
        } catch (error) {
          console.log(error);
          setLoading(false);
          setError(error)
        }
      },3000);
    },[sincronizedItem]); // Este mensaje es solo adveretencia
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem =  JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        setItem(newItem);
      } catch(error) {
          setError(error);
        }
      };
      
      const sincronizeItem = () => {
        setLoading(true)
        setSincronizedItem(false)
      };

      /* Aqui estabas devolviendo un array*/
      /* Como son varioas props devuelves un objeto  */
      return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem,

      };
    };

  
    export {useLocalStorage }