import React, { Component } from 'react';
import axios from 'axios';
// import * as service from './API';
import './PostContainer.css';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: {} };
  }

  // fetchPostInfo = async () => {
  //   const post = await service.data();
  //   console.log(post);
  // };
  // getData() {
  //   return axios
  //     .get('https://api.bithumb.com/public/ticker/all')
  //     .then(response => {
  //       // returning the data here allows the caller to get it through another .then(...)
  //       return response;
  //     });
  // }

  async componentDidMount() {
    let { data: chartData } = await axios.get(
      'https://api.bithumb.com/public/ticker/all'
    );
    this.setState({ chartData });
  }

  render() {
    const { chartData } = this.state;
    // chartData.data.date = undefined;
    // delete chartData.data.date;
    console.log(chartData.data);
    // forEach (val, index in chartData.data) {
    //   console.log(`${index} : ${val.sell_price}`)
    // // }

    // for (const val, index in chartData.data) {
    //   console.log(`${index} : ${val.sell_price}`)
    // }

    // const todoItems = chartData.map((val, index) => (
    //   // Only do this if items have no stable IDs
    //   <li key={index}>{val.sell_price}</li>
    // ));

    // array.forEach(element => {});

    // chartData.data.forEach(val, index => {
    //   console.log(`${index} : ${val.sell_price}`)
    // });

    // var i = 0;
    // while (i < Object.keys(chartData.data).length) {
    //   console.log(`${chartData[i]}`);
    // }

    // const renderData = this.getData();
    // console.log(renderData);
    // const list = chartData.map((val, index) => {
    return (
      <div className="Post">
        <table id="table" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>코인 (Coin)</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.chartData.data}</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostContainer;
