import React, { Component } from 'react';
import './css/App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper header">
            <div className="logo"><img src="./assets/logo-profite.svg" alt="Logo" /></div>
            <div className="search-bar">
              <input type="text" placeholder="O que está procurando?"/>
              <a><img src="./assets/search-icon.svg"></img></a>
            </div>
            <div className="account">
              <div className="block-1">
                <div className="myaccount">
                  <a><img src="./assets/minha-conta.svg"/></a>
                </div>
                <div className="cart">
                  <a><img src="./assets/cart.svg"/></a>
                  <span>1</span>
                </div>
              </div>
              <div className="line"><img src="./assets/line.svg"/></div>
              <div className="block-2">
                <a className="brasil"><img src="./assets/idiomas.svg"/></a>
                <a className="espanha"><img src="./assets/idiomas.svg"/></a>
                <a className="inglaterra"><img src="./assets/idiomas.svg"/></a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
