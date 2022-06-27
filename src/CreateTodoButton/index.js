import './CreateTodoButton.css';

// Si no estas usando las props no debes recibirlas
function CreateTodoButton() {
  
  const onClickButton = (msg) =>{
    alert(msg);
  } 
  
  return (
      <button className="CreateTodoButton"
      onClick= {() => onClickButton('Aqui se deberia abrir el modal')}
      >
        +
      </button>
    );
  }

export { CreateTodoButton};
