// import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css';
// import Header from './components/Header';
// import PostContainer from './components/PostContainer';
// import DataTable from 'react-data-table-component';
// import axios from 'axios';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableData: {
//         // this.state.tableData
//         status: '0000',
//         data: {
//           loading: { sell_price: 'loading', volume_7day: 'loading' },
//         },
//       },
//     };
//     this.getData = this.getData.bind(this);
//   }

//   componentDidMount() {
//     this.getData();
//     this.interval = setInterval(() => {
//       this.getData();
//     }, 1000);
//   }

//   getData() {
//     fetch('https://api.bithumb.com/public/ticker/all')
//       .then(res => {
//         let data = res.json();
//         return data;
//       })
//       .then(res => {
//         // let data = res.json();
//         this.setState({
//           tableData: res,
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <PostContainer data={this.state.tableData} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PostContainer from './components/PostContainer';
import Header from './components/Header';

import './App.css';
// import { storiesOf } from '@storybook/react';
// import DataTable from '../../../src/DataTable/DataTable';

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

