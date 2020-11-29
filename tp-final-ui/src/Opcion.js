import React from 'react';

const Opcion = (props) => {

    return (
        <div onClick = {props.seleccion}>
            {props.value.eleccion}
        </div>
    )
}

export default Opcion;