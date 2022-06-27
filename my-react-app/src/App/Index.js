import React, { useEffect } from "react";
import { AppUI } from "./AppUI"; 
import  { UseLocalStorage } from "../TodoContext/UseLocalStorage";
const defaultTodos = [
  {text: 'Cortar cebolla', completed: true },
  {text: 'Tomar el curso de intro a React', completed: false },
  {text: 'Llorar con llorona ', completed: true },
];



function App() {
 
  return (
    <AppUI
    
    />
  );
}

export default App;
