import { useState, useEffect } from "react";

const SECURITY_CODE = "paradigma";

export function UseState({ name }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(value);

  useEffect(() => {
    console.log("Empezando el efecto");

    if (!!loading) {
      setError(false);
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (value === SECURITY_CODE) {
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }

        console.log("Terminando la validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor escribe el código de seguridad</p>

      {error && <p>Error: el código es incorrecto</p>}
      {loading && <p>Cargando...</p>}

      <input
        placeholder="Código de seguridad"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setLoading(true);
        }}
      >
        Comprobar
      </button>
    </div>
  );
}
