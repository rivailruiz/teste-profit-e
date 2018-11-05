import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Prateleira from './Prateleira';
import '../css/App.css';



class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Prateleira></Prateleira>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
