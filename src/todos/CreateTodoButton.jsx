import React from "react";
import '../estilos/CreateTodoButton.css'
function CreateTodoButton() {
    const OnclickButton=(msg)=>{
        alert(msg)
    }
    return (
        <button className="CreateTodoButton"
            onClick={()=> OnclickButton('aqui se deberia de devolver un modal') }
        >+</button>

    );
}
export { CreateTodoButton };
