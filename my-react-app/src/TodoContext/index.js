import React from "react";
import  { UseLocalStorage } from './UseLocalStorage';
const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos ,
    } = UseLocalStorage('TODOS_V1',defaultTodos); 
 const [searchValue, setSearchValue] = React.useState('');

 /* Funcion que retorna el coontador */
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  
  /* Funcion de Toggle todo- Checkbox */
  const completeTodo = (text) => { 
    const todo = todos.find((todo => todo.text === text));
    console.log(todo);
    const newTodos = [...todos];
    todo.completed = !todo.completed;
    saveTodos(newTodos);
  }; 
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }; 
    
    
    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };