import React from "react";
import '../estilos/TodoItem.css'
function TodoItem(props) {
    const onComplete=()=>{
        alert('Ya commpletaste el todo'+props.text);
    }
    const onDelete=()=>{
        alert('El todo sera borrado'+props.text);
    }


    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}  onClick={onComplete}>✓</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"  onClick={onDelete}> X </span>
            <button className="Grabar">Grabar Respuesta</button>
            <button className="Eliminar">Eliminar Respuesta</button>
        </li>
        );
}
export {TodoItem};
