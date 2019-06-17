import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import PostContainer from './components/PostContainer';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init',
      tableData: {},
    };
  }

  async componentDidMount() {
    let { data: chartData } = await axios.get(
      'https://api.bithumb.com/public/ticker/all'
    );
    this.setState({ tableData: chartData });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PostContainer data={this.state.tableData} />
      </div>
    );
  }
}

export default App;
