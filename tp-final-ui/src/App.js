import React, {useState} from 'react';
import Opcion from './Opcion.js';
import Resultado from './Resultado.js';



const App = () => {

  const opciones = [
    {eleccion: "Tijera", derrota: ["Papel", "Lagarto"]},
    {eleccion: "Papel", derrota: ["Piedra", "Spock"]},
    {eleccion: "Piedra", derrota: ["Lagarto", "Tijera"]},
    {eleccion: "Lagarto", derrota: ["Spock", "Papel"]},
    {eleccion: "Spock", derrota: ["Tijera","Piedra"]}
  ]

  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionCOM, setEleccionCOM] = useState({});

  const seleccionarJugada = (event) => {
    const jugada = opciones.find(e => e.eleccion === event.target.textContent);
    console.log(jugada)
    setEleccionJugador(jugada);
    seleccionCOM();
  }

  const seleccionCOM = () => {
    const seleccion = opciones[Math.floor(Math.random() * opciones.length)];
    console.log(seleccion)
    setEleccionCOM(seleccion);
  }

  const sinRepetidos = () =>{
    return ["Piedra", "Papel", "Tijera", "Lagarto", "Spok"];
  }
  
  return (
    <>
       <div>
        COM:
        <span>{eleccionCOM.eleccion}</span>
      </div>
      <div>
        Jugador: 
        <span>{eleccionJugador.eleccion}</span>
      </div>
      <div>
          {eleccionJugador.eleccion && <Resultado jugador = {eleccionJugador} COM = {eleccionCOM}/>}  
        </div>
      <div>
        {
          sinRepetidos().map((e, index) => <Opcion seleccion ={seleccionarJugada} value = {opciones[index]}/>)
        }
        </div>
         
    </>
  )

}
export default App;
