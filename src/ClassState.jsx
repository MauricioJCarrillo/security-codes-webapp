import React, { Component } from "react";
import { Loading } from "./Loading";

export class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.setState({ loading: false });
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

        <input placeholder="Código de seguridad" />
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}
