import React, { Component } from 'react';
// import axios from 'axios';
import './PostContainer.css';

class PostContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: chartData,
  //   };
  // }

  // async componentDidMount() {
  //   let { data: chartData } = await axios.get(
  //     'https://api.bithumb.com/public/ticker/all'
  //   );
  //   this.setState({ chartData });
  // }

  // componentDidMount() {
  //   var th = this;
  //   this.serverRequest = axios
  //     .get('https://api.bithumb.com/public/ticker/all')
  //     .then(function(event) {
  //       th.setState({
  //         data: event.data,
  //       });
  //     });
  // }

  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }

  render() {
    // const { chartData } = this.state;
    // this.state.data.date = undefined;
    // delete this.state.data.date;
    // console.log(chartData.data);

    // for (const val, index in chartData.data) {
    //   console.log(`${index} : ${val.sell_price}`)
    // }

    // Object.entries(chartData.data).forEach(([key, value]) => {
    //   console.log(value);
    // });
    // for (const [key, value] of Object.entries(chartData.data)) {
    //   console.log(`${value.sell_price}`);
    // }

    // let contents = this.state.data.data;
    // let newData = contents;
    // console.log(Object.keys(newData));
    // var lists = [];

    var data = this.props.data;
    var chart;
    // console.log(data);
    if (data.status === '0000') {
      console.log(Object.keys(data.data));
      // data.

      for (const [key, value] of Object.entries(data.data)) {
        // console.log(`${value.sell_price}`);
        chart += `<tr>
            <td>${key}</td>
            <td>${value.sell_price}</td>
            <td>${value.volume_7day}</td>
          </tr>`;
      }
      console.log(chart);
    }

    return (
      <div className="Post">
        <table id="table" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Coin Name</th>
              <th>Current Price</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>{(dangerouslySetInnerHTML = chart)}</tbody>
        </table>
      </div>
    );
  }
}

export default PostContainer;
