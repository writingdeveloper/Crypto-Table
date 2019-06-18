import React, { Component } from 'react';
import './PostContainer.css';

class PostContainer extends Component {
  render() {
    let data = this.props.data;
    let chart = [];
    // console.log(data);
    if (data.status === '0000') {
      delete data.data['date'];
      for (let [key, value] of Object.entries(data.data)) {
        chart.push(
          <tr key={key}>
            <td>{key}</td>
            <td>{value.sell_price}</td>
            <td>{value.volume_7day}</td>
          </tr>
        );
      }
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
          <tbody>{chart}</tbody>
        </table>
      </div>
    );
  }
}

export default PostContainer;
