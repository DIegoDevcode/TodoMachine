import React from "react";
import { TodoCounter } from "../TodoCounter/Index";
import { TodoSearch } from "../TodoSearch/Index";
import { TodoList } from "../TodoList/Index";
import { TodoItem } from "../TodoItem/Index";
import { TodosError} from "../TodosError/Index";
import { TodosLoading } from "../TodosLoading/Index";
import { EmptyTodos } from "../EmptyTodos/Index";
import { TodoForm }  from "../TodoForm/Index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

/* Importamos el context para poder usar los valores*/

function AppUI() {
  /* destructuramos los values de Todo context */
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
  } = React.useContext(TodoContext);
  /* Aqui usamos la variable de TodoContext */

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        /* Este esta bien porque es el contador */
        completed={completedTodos}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
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
              <TodoForm/>
          </Modal>
          )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };