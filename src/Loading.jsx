import React, { Component } from "react";

export class Loading extends Component {
  componentWillUnmount() {
    console.log("Este es: componentWillUnmount");
  }

  render() {
    return <p>Cargando...</p>;
  }
}
