import React from 'react';
import '../styles/index.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Expenses from './components/Expenses';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Nav />
        <Expenses />
        <Footer />
      </div>
    )
  }
}
