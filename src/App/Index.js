/* Importamos el provider para poder usar los value que envia el TodoContext*/
import React from "react";
import { useTodos } from "./useTodos";
import { TodoList } from "../TodoList/Index";
import { TodoItem } from "../TodoItem/Index";
import { TodosError} from "../TodosError/Index";
import { TodosLoading } from "../TodosLoading/Index";
import { EmptyTodos } from "../EmptyTodos/Index";
import { TodoForm }  from "../TodoForm/Index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { TodoContext } from "./useTodos";
import { TodoHeader } from "../TodoHeader/Index";
import { TodoCounter } from "../TodoCounter/Index";
import { TodoSearch } from "../TodoSearch/Index";
import { Modal } from "../Modal";
import { ChangeAlertWhithStorageListener } from "../ChangeAlert/Index";

function App() {
  // Encapsulamos el APPUi en el provider
  // Como vvamos a renderizar más de un "componente" debe ir en ()
  const {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    error,
    loading,
    /* Esto es un componente no es un value del context*/
    //TodosLoading,
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
      <TodoCounter
        totalTodos={totalTodos}
        /* Este esta bien porque es el contador */
        completedTodos={completedTodos}
        />
        <TodoSearch
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        />
        </TodoHeader>

        <TodoList 
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          searchText={searchValue}          
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={
            (searchText) => <p>No hay resultados {searchText}</p> 
          
          }
        //   render={todo => (
        //     <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     /* Este es el que contrala el checkbox de realizado o no realizado*/
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
          >
            {todo => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            /* Este es el que contrala el checkbox de realizado o no realizado*/
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
          </TodoList>
          {!!openModal && (
            <Modal>
              <TodoForm
                addTodo={addTodo}
                setOpenModal={setOpenModal}

              />
            </Modal>
          )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <ChangeAlertWhithStorageListener />
    </React.Fragment>
  );
}

export default App;
