import React, { Component } from 'react';

class TituloComum extends Component {
  render() {
      const titulo = '';
      var style = {
        position: "relative",
        padding: "15px 0",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "normal",
        fontSize: "20px",
        marginBottom: "14px;",
        after: {
            content: '_____',
            position: "absolute",
            bottom: 0,
            left: 0,
            fontWeight: "bold",
            color: "#FF9F1C",
        }
      };
    return (
        <h2 className="tituloComum" style={style}>{this.props.titulo}</h2>
    );
  }
}

export default TituloComum;
