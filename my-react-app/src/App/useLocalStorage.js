import React from "react";

 function useLocalStorage(itemName, initialValue ) { 
  const [state, dispactch] = React.useReducer(reducer, initialState({ initialValue }));
  const { 
  sincronizedItem,
  error,
  loading,
  item,
} = state;


  // ACTION CREATORS  
  const onError = (item) => dispactch({type: actionTypes.error, payload: item, });
  
  const onSuccess = (item) => dispactch({type: actionTypes.success, payload: item, });
  
  const onSave = (item) => dispactch({type: actionTypes.save, payload: item, });

  const onSincronize = (item) => dispactch({type: actionTypes.sincronize, payload: item, });

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
          onSuccess(parsedItem);
        } catch (error) {
          console.log(error);
          setLoading(false);
          // setError(error)
        }
      },3000);
    },[sincronizedItem]); // Este mensaje es solo adveretencia
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem =  JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        onSave(newItem);
             } catch(error) {
               OnError(error);
        dispactch({type: actionTypes.error, payload: error })
        }
      };
      
      const sincronizeItem = () => {
        onSincronize();
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

      const initialState =({ initialValue }) => ({
         sincronizedItem: true,
         error: false,
        loading: true,
        item: initialValue,
      });
      
      const actionTypes = {
      error: 'ERROR',
      success: 'SUCCESS',
      save: 'SAVE',
      sincronize:'SINCRONIZE',

      }

      const reducerObject = (state, payload) => ({
        [actionTypes.error]: {
          ...state,
          error: true,
        },
        [actionTypes.success]: {
          ...state,
          error: false,
          loading: false,
          sincronizedItem: true,
          item: payload,
        },
        [actionTypes.save]: {
          ...state,
                    item: payload,
        },
        [actionTypes.sincronize]: {
          ...state,
          sincronizeItem: false,
          loading: true,
        },
      });

      const reducer = (state, action) => {
        return reducerObject(state, action.payload) [action.type] || state;
      }


    export {useLocalStorage }