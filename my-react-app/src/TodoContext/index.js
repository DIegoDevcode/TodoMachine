import React from "react";
import  { useLocalStorage } from './useLocalStorage';

/* esta variable es la que se va a usar para manejar el context*/
const TodoContext = React.createContext();

/* Este es el array con el defaultTodos que va a cargar a penas se inicie*/
const defaultTodos = [
  {text: 'Cortar cebolla', completed: true },
  {text: 'Tomar el curso de intro a React', completed: false },
  {text: 'Llorar con llorona ', completed: true },
];

function TodoProvider(props) {
   /* Configurar el estado, se pasa el default todos para que cargue ese array */
  /* Tener cuidado con el camel Case  */
  
  const { 
    item: todos, 
    saveItem: saveTodos} = useLocalStorage ('TODOS_V1',defaultTodos); 

 const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
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
  // Función para añadir un nuevo TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  /* Funcion de Toggle todo- Checkbox */
  const completeTodo = (text) => { 
    const todo = todos.find((todo => todo.text === text));
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
          /* Mandamos mediante los value el provider con los valores a usar*/
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };