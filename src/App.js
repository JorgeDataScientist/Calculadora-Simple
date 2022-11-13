import './App.css';
import Logofcc from './imagenes/Logofcc.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react'
//importo libreria mathjs para utilizar "evaluate" (linea 20)
import { evaluate } from 'mathjs'; //https://mathjs.org/



function App() {

  //Agregando caracteristicas al input de la pantalla
  const [input, setInput] = useState('');

  const agregarInput = (val) =>{
    setInput(input + val)
  };
  //-------------------------------------------------
  //Caracteristicas del boton "="
  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input));
    } else{
      alert ('Ingrese Valores para realizar el calculo')
    };
  };

  return (
    <div className='App'>
      
      <div className='freeCodeCamp-logo-contenedor'>
        <img 
          src={Logofcc}
          className='freeCodeCamp-logo'
          alt='Logo FreeCodeCamp'
        />
      </div>

      <div className='contenedor-calculadora'>

        <Pantalla input={input} />

        <div className='fila'>
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton></div>  
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>      
      </div>

    </div>
  );
}

export default App;
