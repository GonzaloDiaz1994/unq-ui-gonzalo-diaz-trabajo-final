import React from "react";
import "./Bienvenida.css";

const Bienvenida = () => {
  return (
    <div>
      <strong>
        <h4>
          <p>¡Bienvenide a Piedra, Papel, Tijera, Lagarto o Spock!</p>
        </h4>
        
        <div class="card container">
          <div className="titulo">Estas son las reglas del juego:</div>

          <ul>
            <li>Tijera corta a Papel</li>
            <li>Papel tapa a Piedra</li>
            <li>Piedra aplasta a Lagarto</li>
            <li>Lagarto envenena a Spock</li>
            <li>Spock rompe a Tijera</li>
            <li>Tijera decapita a Lagarto</li>
            <li>Lagarto devora a Papel</li>
            <li>Papel desautoriza a Spock</li>
            <li>Spock vaporiza a Piedra</li>
            <li>Piedra aplasta a Tijera</li>
          </ul>
        </div>
        
        <h5>
          <p>Seleccione su jugada para jugar contra la computadora.</p>
        </h5>
      </strong>
    </div>
  );
};

export default Bienvenida;
