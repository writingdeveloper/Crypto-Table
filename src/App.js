import React, { Component } from 'react';
import Header from './components/Header';
import 'semantic-ui-css/semantic.min.css';
import PostContainer from './components/PostContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostContainer />
      </div>
    );
  }
}

export default App;
