import React, { Component } from 'react';
import TituloComum from './titulo-comum';




class Banner extends Component {
  render() {
    return (
       <section>
           <div className="banner">
            <ul>
                <li>
                    <h3>Nossa especialidade: experiência de compra.</h3>
                    <img src="./assets/banner1.png"/>
                </li>
            </ul>
           </div>
       </section>
    );
  }
}

export default Banner;
