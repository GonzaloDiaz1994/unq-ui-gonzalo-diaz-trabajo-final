import React, {useState} from 'react';
import Opcion from './Opcion.js';
import Resultado from './Resultado';


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
    const jugada = opciones.find(s => s.eleccion === event.target.textContent);
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
        Jugador: 
        <span>{eleccionJugador.eleccion}</span>
      </div>
       <div>
        COM:
        <span>{eleccionCOM.eleccion}</span>
      </div>
      <div>
        {
          sinRepetidos().map((s, index) => <Opcion seleccion ={seleccionarJugada} value = {opciones[index]}/>)
        }
        </div>
        <div>
          <Resultado jugador = {eleccionJugador} COM = {eleccionCOM}/>
        </div>
    </>
  )

}
export default App;
