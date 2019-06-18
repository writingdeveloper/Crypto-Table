import React, { Component } from 'react';
import './PostContainer.css';

class PostContainer extends Component {
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
    let data = this.state.tableData;
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
