import React from "react";
import '../estilos/TodoSearch.css'
function TodoSearch({search, setSearch}) {
    
    const onSearch=(event)=>{
        console.log(event.target.value);
        setSearch(event.target.value)
    }
    return (
        <input className="TodoSearch" placeholder='hola mundo' onChange={onSearch} value={search}></input>
       
    );
}
export {TodoSearch};
