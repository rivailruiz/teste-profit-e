import React, { Component } from 'react';
import TituloComum from './titulo-comum';

import Carousel from 'nuka-carousel';



class Banner extends Component {
  render() {
    return (
       <section>
           <Carousel 
            renderCenterLeftControls={({ previousSlide }) => (
                <a onClick={previousSlide}>< img src="./assets/prev-icon.svg"/></a>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <a onClick={nextSlide}>< img src="./assets/next-icon.svg"/></a>
            )}>
            <div className="banner">
                <div className="titulo"><h3>Nossa especialidade: experiência de compra.</h3></div>
                <img src="./assets/banner1.png"/>
            </div>
            <div className="banner">
                <div className="titulo"><h3>Venha nos conhecer!</h3></div>
                <img src="./assets/banner1.png"/>
            </div>

           </Carousel>
           {/* <div className="banner">
            <ul>
                <li>
                    <h3>Nossa especialidade: experiência de compra.</h3>
                    <img src="./assets/banner1.png"/>
                </li>
            </ul>
           </div> */}
       </section>
    );
  }
}

export default Banner;
