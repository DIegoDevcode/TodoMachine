import React from "react";
import { TodoCounter } from "../TodoCounter/Index";
import { TodoSearch } from  "../TodoSearch/Index";
import {  TodoList }  from  "../TodoList/Index";
import {  TodoItem }  from  "../TodoItem/Index";
import {  CreateTodoButton }  from "../CreateTodoButton/index";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {

    return (
        <React.Fragment >
     <TodoCounter 
      total={totalTodos}
      /* Este esta bien porque es el contador */
      completed ={completedTodos}
     />
     <TodoSearch  
      searchValue={searchValue}
      setSearchValue={setSearchValue}
     />
    
     <TodoList>
     {searchedTodos.map(todo =>(
     <TodoItem 
     key={todo.text} 
     text={todo.text} 
     completed={todo.completed}
     /* Este es el que contrala el checkbox de realizado o no realizado*/
     onComplete={() => completeTodo(todo.text)}
     onDelete={() => deleteTodo(todo.text)}

     />
     ))}
     </TodoList>
     <CreateTodoButton />
  </React.Fragment>
  );
}
    


export {AppUI };