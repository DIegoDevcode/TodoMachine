/* Importamos el provider para poder usar los value que envia el TodoContext*/
import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter/Index";
import { TodoSearch } from "../TodoSearch/Index";
import { TodoList } from "../TodoList/Index";
import { TodoItem } from "../TodoItem/Index";
import { TodosError} from "../TodosError/Index";
import { TodosLoading } from "../TodosLoading/Index";
import { EmptyTodos } from "../EmptyTodos/Index";
import { TodoForm }  from "../TodoForm/Index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { TodoContext } from "./useTodos";
import { TodoHeader } from "../TodoHeader/Index";
import { Modal } from "../Modal";

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
      <TodoHeader>

      <TodoCounter
        totalTodos={totalTodos}
        /* Este esta bien porque es el contador */
        completedTodos={completedTodos}
        />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader>

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map((todo) => (
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
    </React.Fragment>
  );
}

export default App;
