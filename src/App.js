import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import PostContainer from './components/PostContainer';
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
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 1000);
  }

  getData() {
    fetch('https://api.bithumb.com/public/ticker/all')
      .then(res => {
        const data = res.json();
        return data;
      })
      .then(res => {
        this.setState({
          tableData: res,
        });
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
