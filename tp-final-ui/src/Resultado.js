import React from 'react';




const Resultado = (props) => {

    const comprobar = (p, c) =>{
        var retorno = false; 
        for(var i=0; i<2; i++){
            if(p.derrota[i] == c.eleccion){
                retorno = retorno || true
            }
        }
        return retorno
    }

    let result;
    var puntajePersonal = 0;
    var puntajeCOM = 0;

    if(comprobar(props.jugador, props.COM) && props.jugador.eleccion){
        result = "GANASTE"
        puntajePersonal++
    }else if(comprobar(props.COM, props.jugador) && props.jugador.eleccion){
        result = "PERDISTE"
        puntajeCOM++
    }else if(props.COM.eleccion === props.jugador.eleccion && props.jugador.eleccion){
        result = "EMPATARON"
    }

    return(
        <>
    <h1>{result}</h1>
    {/* <h1>Puntaje personal = {puntajePersonal}</h1>
    <h1>Puntaje COM = {puntajeCOM}</h1> */}
    </>
    )
}

export default Resultado;