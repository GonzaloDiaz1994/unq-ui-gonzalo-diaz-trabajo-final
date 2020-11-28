import React, {useState} from 'react';
import './App.css';


const App = () => {

  const opciones = [
    {eleccion: "Tijera", derrota: "Papel"},
    {eleccion: "Papel", derrota: "Piedra"},
    {eleccion: "Piedra", derrota: "Lagarto"},
    {eleccion: "Lagarto", derrota: "Spock"},
    {eleccion: "Spock", derrota: "Tijera"},
    {eleccion: "Tijera", derrota: "Lagart"},
    {eleccion: "Lagarto", derrota: "Papel"},
    {eleccion: "Papel", derrota: "Spock"},
    {eleccion: "Spock", derrota: "Piedra"},
    {eleccion: "Piedra", derrota: "Tijera"}
  ];

  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionCOM, setEleccionCOM] = useState({});

  return (
    <>
      <div>

        Hola
      </div>
    </>
  )

}
export default App;
