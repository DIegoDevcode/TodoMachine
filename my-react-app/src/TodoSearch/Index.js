import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChaenge = (event) => {
    setSearchValue(event.target.value);
  };

  // Estabas retornando un array []
  // Por eso tenias una viso de que cada key debe ser unica
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChaenge}
      />
      ,<p>{searchValue}</p>
    </>
  );
}

export { TodoSearch };
