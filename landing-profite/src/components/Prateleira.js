import React, { Component } from 'react';
import TituloComum from './titulo-comum';
import BotaoComprar from './botao-comprar'

class Prateleira extends Component {

  state ={
    data: [
      {
        id: 1,
        titulo: "Tenis da adidas", 
        precoDe: "de R$ 359,00", 
        precoPor: "por R$ 200,00",
        precoOu: "ou em 8x de R$ 25,00",
        off: true,
        avaliacao: 3,
        img:'./assets/produto1.png'
      },
      {
        id: 2,
        titulo: "Tenis da Converse", 
        precoDe: "de R$ 59,00", 
        precoPor: "por R$ 19,00",
        precoOu: "ou em 8x de R$ 10,00",
        off: false,
        avaliacao: 1,
        img:'./assets/produto2.png'
      },
      {
        id: 3,
        titulo: "Tenis da Vans", 
        precoDe: "de R$ 449,00", 
        precoPor: "por R$ 339,00",
        precoOu: "ou em 8x de R$ 45,00",
        off: false,
        avaliacao: 5,
        img:'./assets/produto3.png'
      },
      {
        id: 4,
        titulo: "Tenis da Nike", 
        precoDe: "de R$ 229,00", 
        precoPor: "por R$ 119,00",
        precoOu: "ou em 8x de R$ 10,00",
        off: true,
        avaliacao: 4,
        img:'./assets/produto4.png'
      }
    ]
  }
  render() {
    return (
       <section>
           <div className="wrapper">
                <TituloComum titulo="Produtos"/>
                <div className="listagem">
                  <ul>
                    {
                      this.state.data.map(x => 
                      <li>
                        <div className="imagemProduto">
                          <img src={x.img}/>
                        </div>
                        <div className="tituloProduto">
                          <p>{x.titulo}</p>
                        </div>
                        <div className="avaliacao">
                        </div>
                        <div className="preco">
                          <div className="precoDe">{x.precoDe}</div>
                          <div className="precoPor">{x.precoPor}</div>
                          <div className="ou">{x.precoOu}</div>
                        </div>
                        <BotaoComprar/>
                      </li>)
                    }
                  </ul>
                </div>
           </div>
       </section>
    );
  }
}

export default Prateleira;
