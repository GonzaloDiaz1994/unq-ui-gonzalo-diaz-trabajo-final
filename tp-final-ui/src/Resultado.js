import React from 'react';



const Resultado = (props) => {

    const comprobar = (p, c) =>{
        var retorno = false; 
        for(var i=0; i<2; i++){
            if(p.derrota[i] === c.eleccion){
                console.log(p.derrota[i])
                retorno = retorno || true
            }
        }
        return retorno
    }

    let result;

    if(comprobar(props.jugador, props.COM) && props.jugador.eleccion){
        result = "GANASTE"
    }else if(comprobar(props.COM, props.jugador) && props.jugador.eleccion){
        result = "PERDISTE"
    }else if(props.COM.eleccion === props.jugador.eleccion && props.jugador.eleccion){
        result = "EMPATARON"
    }

    return(
    <h1>{result}</h1>
    )
}

export default Resultado;