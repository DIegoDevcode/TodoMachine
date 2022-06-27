import "./TodoList.css";

// No hay necesidad de usar un section, las etiquitas UL funcionan como contenedor
function TodoList(props) {
  return <ul>{props.children}</ul>;
}

export { TodoList };
