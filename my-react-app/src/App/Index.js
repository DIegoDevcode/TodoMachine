import { AppUI } from "./AppUI"; 
/* Importamos el provider para poder usar los value que envia el TodoContext*/
import { TodoProvider } from "../TodoContext";

function App () {
  // Encapsulamos el APPUi en el provider
  // Como vvamos a renderizar más de un "componente" debe ir en () 
  return (
<TodoProvider>
      <AppUI />
    </TodoProvider>    
  );
}

export default App;