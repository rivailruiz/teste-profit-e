import React, { Component } from 'react';

class BotaoComprar extends Component {
  render() {
      var style = {
        background: "#2EC4B6",
        borderRadius: "5px",
        border: 0,
        fontFamily: "Ubuntu",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
        fontSize: "14px",
        color: "#FFFFFF",
        textTransform: "uppercase",
        padding: "10px 20px",
        opacity: "0",
      };

      var imgStyle = {
        verticalAlign: "bottom"
      }
    return (
        <button className="botaoComprar" style={style}><img style={imgStyle} src="./assets/comprar-icon.svg"/> Comprar</button>
    );
  }
}

export default BotaoComprar;
