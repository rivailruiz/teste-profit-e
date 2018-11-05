import React, { Component } from 'react';
import TituloComum from './titulo-comum';

class Prateleira extends Component {
  render() {
    return (
       <section>
           <div className="wrapper">
                <TituloComum titulo="Produtos"/>
                <div className="listagem">
                  <ul>
                    <li>
                      <div className="imagemProduto">
                       <img src="./assets/produto1.png"/>
                      </div>
                      <div className="tituloProduto">
                        <p>Tenis da adidas teste</p>
                      </div>
                      <div className="avaliacao">

                      </div>
                      <div className="preco">
                        <div className="precoDe"></div>
                        <div className="precoPor"></div>
                      </div>
                    </li>
                  </ul>
                </div>
           </div>
       </section>
    );
  }
}

export default Prateleira;
