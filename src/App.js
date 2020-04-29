import React, { Component } from 'react';
import {AuthProvider} from './context/AuthContext';
import './App.css';
import Articles from './components/Articles';
import Article from './components/Article';

class App extends Component {
  render(){
    return (
      <AuthProvider><Articles/></AuthProvider>
    );
  };
}

export default App;
