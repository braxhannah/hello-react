import React, { Component } from 'react';
import Header from './Header.js';
import Article from './Article.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component { //Compenent is a different class react defines. Making own react class
  render() { //naming of method for the App object will have a render function ..Its a class syntax like const app =
    return (
      <div className='App'> //
        <Header/>
        <Article/>
        <Footer/>
      </div>
    );
  }
}

export default App;
