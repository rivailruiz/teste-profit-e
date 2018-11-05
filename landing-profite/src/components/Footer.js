import React, { Component } from 'react';




class Footer extends Component {
  render() {
    return (
       <section className="footer">
           <div className="wrapper">
                <div className="block-left">
                    <div className="loc">
                        <h2>Localização</h2>
                        <div className="address">
                            <div className="left">
                                <h3>São Paulo</h3>
                                <span>Rua do Rócio, 423/1801</span>
                                <span>Vila Olímpia - SP</span>
                                <span>04552-000</span>
                                <span>+55 11 3333-3333</span>
                            </div>
                            <div className="right">
                                <h3>Rio de Janeiro</h3>
                                <span>Vol. da Pátria, 301/702</span>
                                <span>Botafogo - RJ</span>
                                <span>22270-000</span>
                                <span>+55 21 3333-3333</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <button><img src="./assets/mail.png"/> Entre em contato</button>
                        <button><img src="./assets/phone.svg"/> Fale com o nosso consultor online</button>
                    </div>
                </div>
                <div className="block-right">
                    <img src="./assets/logos-footer.svg"/>
                </div>
           </div>
       </section>
    );
  }
}

export default Footer;
