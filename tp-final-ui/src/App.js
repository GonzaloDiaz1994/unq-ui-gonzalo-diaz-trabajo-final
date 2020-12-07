import React, { useState } from "react";
import Opcion from "./Opcion.js";
import "./Estilos.css";
import Resultado from "./Resultado.js";
import tijera from "./imagenes/tijera.png";
import lagarto from "./imagenes/lagarto.png";
import piedra from "./imagenes/piedra.png";
import papel from "./imagenes/papel.png";
import spock from "./imagenes/spock.png";
import Bienvenida from "./Bienvenida.js";

const App = () => {
  const opciones = [
    { eleccion: "Piedra", imagen: piedra, derrota: ["Lagarto", "Tijera"] },
    { eleccion: "Papel", imagen: papel, derrota: ["Piedra", "Spock"] },
    { eleccion: "Tijera", imagen: tijera, derrota: ["Papel", "Lagarto"] },
    { eleccion: "Lagarto", imagen: lagarto, derrota: ["Spock", "Papel"] },
    { eleccion: "Spock", imagen: spock, derrota: ["Tijera", "Piedra"] },
  ];

  const historialCOM = [];
  let puntuacionJugador = 0;
  let puntuacionCOM = 0;

  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionCOM, setEleccionCOM] = useState({});

  const seleccionarJugada = (event) => {
    const jugada = opciones.find(
      (e) => e.eleccion === event.target.textContent
    );
    console.log(jugada);
    setEleccionJugador(jugada);
    seleccionCOM();
  };

  const seleccionCOM = () => {
    const seleccion = opciones[Math.floor(Math.random() * opciones.length)];
    console.log(seleccion);
    setEleccionCOM(seleccion);
  };

  const resetear = () =>{
    setEleccionJugador({})
  }

  return (
    <>
      <div>
        {eleccionJugador.eleccion && (
          <div className=" computadora">
            <strong>
              Computadora seleccionó:
              <span> {eleccionCOM.eleccion}</span>
            </strong>
            <div>
              <img src={eleccionCOM.imagen} classname="imagen img-fluid" />
            </div>
          </div>
        )}
        <div className="resultado ">
          {!eleccionJugador.eleccion && <Bienvenida />}
          {eleccionJugador.eleccion && (
            <Resultado jugador={eleccionJugador} COM={eleccionCOM} />
          )}
        </div>
        {eleccionJugador.eleccion && (
          <div className="jugador">
            <div>
              <img src={eleccionJugador.imagen} classname="imagen  img-fluid" />
            </div>

            <strong>
              Jugador:
              <span> {eleccionJugador.eleccion}</span>
            </strong>
          </div>
        )}
      </div>
      <div className="opciones">
        {opciones.map((e, index) => (
          <Opcion seleccion={seleccionarJugada} value={opciones[index]} />
        ))}
      </div>
      {eleccionJugador.eleccion && (<div className="opciones">
        <button type="button"
        class="opcion btn btn-danger"  onClick={resetear} > Reset </button>
      </div>)}
    </>
  );
};
export default App;
