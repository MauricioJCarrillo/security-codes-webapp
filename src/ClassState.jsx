import React, { Component } from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";

export class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  UNSAFE_componentWillMount() {
    console.log("Este es: componentWillMount");
  }

  componentDidMount() {
    console.log("Este es: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Este es: Actualización");

    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (this.state.value === SECURITY_CODE) {
          this.setState({ loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }

        console.log("Terminando la validación");
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor escribe el código de seguridad</p>

        {this.state.error && <p>Error: el código es incorrecto</p>}
        {this.state.loading && <Loading />}

        <input
          disabled={this.state.loading}
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button onClick={() => this.setState({ loading: true, error: false })}>
          Comprobar
        </button>
      </div>
    );
  }
}
