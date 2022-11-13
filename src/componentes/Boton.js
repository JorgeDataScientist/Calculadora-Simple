import React from "react";
import '../Hojas-de-Estilos/Boton.css';


function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }
  return(
    <div className={
      `boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
      >
      {props.children}
    </div>
  )
}

export default Boton;


// trimEnd() es un comando para eliminar los espacion en una cadena de caracteres