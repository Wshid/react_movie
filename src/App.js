import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return ( // 이를 JSX라고 함
      <div className="App"> 
        <Movie />
      </div>
    );
  }
}

export default App;
