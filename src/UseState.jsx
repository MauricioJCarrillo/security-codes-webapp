import { useState, useEffect } from "react";

const SECURITY_CODE = "paradigma";

export function UseState({ name }) {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
  });

  console.log(state);

  useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (state.value === SECURITY_CODE) {
          setState({ ...state, loading: false });
        } else {
          setState({ ...state, error: true, loading: false });
        }

        console.log("Terminando la validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
  }, [state.loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor escribe el código de seguridad</p>

      {state.error && <p>Error: el código es incorrecto</p>}
      {state.loading && <p>Cargando...</p>}

      <input
        placeholder="Código de seguridad"
        value={state.value}
        onChange={(event) => {
          setState({ ...state, value: event.target.value });
        }}
      />
      <button
        onClick={() => {
          setState({ ...state, loading: true, error: false });
        }}
      >
        Comprobar
      </button>
    </div>
  );
}
