import React from "react";

const Opcion = (props) => {
  return (
    <button
      type="button"
      class="opcion btn btn-primary"
      onClick={props.seleccion}
    >
      {props.value.eleccion}
    </button>
  );
};

export default Opcion;
