import React, { Component } from 'react';
import TituloComum from './titulo-comum';




class Banner extends Component {
  render() {
    return (
       <section>
           <div className="banner">
                <div className="wrapper">
                    <ul>
                        <li>
                            <div className="left">
                                <div className="wrapper">
                                    <div className="title">
                                        <h3>Nossa especialidade: experiência de compra.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="./assets/banner.jpg"/>
                            </div>
                        </li>
                    </ul>
                </div>
           </div>
       </section>
    );
  }
}

export default Banner;
