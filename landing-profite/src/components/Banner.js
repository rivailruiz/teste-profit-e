import React, { Component } from 'react';




class Banner extends Component {
  render() {
    return (
       <section>
           <div className="banner">
                <ul>
                    <li>
                        <div className="left">
                            <div className="title">
                                <h3>Nossa especialidade: experiência de compra.</h3>
                            </div>
                        </div>
                        <div className="right">
                            <img src="./assets/banner.jpg"/>
                        </div>
                    </li>
                </ul>
           </div>
       </section>
    );
  }
}

export default Banner;
