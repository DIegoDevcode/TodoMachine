import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue, loading}) {
  const onSearchValueChaenge = (event) => {
    console.log(event.target.value);
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
        disabled={loading}
      />
      ,<p>{searchValue}</p>
    </>
  );
}

export { TodoSearch };
