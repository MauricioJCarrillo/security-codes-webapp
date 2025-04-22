import { useState, useEffect } from "react";

const SECURITY_CODE = "paradigma";

export function UseState({ name }) {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  console.log(state);

  const onConfirm = () => {
    setState({ ...state, error: false, loading: false, confirmed: true });
  };

  const onError = () => {
    setState({ ...state, error: true, loading: false });
  };

  const onWrite = (event) => {
    setState({ ...state, value: event.target.value });
  };

  const onCheck = () => {
    setState({ ...state, loading: true });
  };

  const onDeleted = () => {
    setState({ ...state, deleted: true });
  };

  const onReset = () => {
    setState({ ...state, deleted: false, confirmed: false, value: "" });
  };

  useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }

        console.log("Terminando la validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>

        <p>Por favor escribe el código de seguridad</p>

        {state.error && !state.loading && <p>Error: el código es incorrecto</p>}
        {state.loading && <p>Cargando...</p>}

        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {
            onWrite(event);
          }}
        />
        <button
          onClick={() => {
            onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!state.deleted && !!state.confirmed) {
    return (
      <div>
        <h2>Confirmación</h2>

        <p>¿Estás seguro que quieres eliminar el elemento?</p>

        <button
          onClick={() => {
            onDeleted();
          }}
        >
          Eliminar
        </button>
        <button
          onClick={() => {
            onReset();
          }}
        >
          No, me arrepentí
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Eliminado con éxito</p>

        <button
          onClick={() => {
            onReset();
          }}
        >
          Regresar
        </button>
      </div>
    );
  }
}
