import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './PostContainer.css';
import { darkTheme, columns } from './tableSetting';

/* Component */
class PostContainer extends Component {
  state = {
    data: [],
    totalRows: 0,
  };

  async componentDidMount() {
    // const response = await axios.get(
    //   `https://api.bithumb.com/public/ticker/all`
    // );
    // console.log(response.data);

    // let chart = [];
    // let chartLength;
    // // console.log(data);
    // if (response.data.status === '0000') {
    //   delete response.data.data['date'];
    //   console.log(response.data.data);
    //   for (let [key, value] of Object.entries(response.data.data)) {
    //     if (value['24H_fluctate_rate'] === 1) {
    //       chart.push({
    //         key: key,
    //         Price: `${value.sell_price}원`,
    //         FluctateRate: `+ ${value['24H_fluctate_rate']}`,
    //         Volume: value.volume_7day,
    //       });
    //     } else {
    //       chart.push({
    //         key: key,
    //         Price: `${value.sell_price}원`,
    //         FluctateRate: value['24H_fluctate_rate'],
    //         Volume: value.volume_7day,
    //       });
    //     }
    //   }
    //   chartLength = chart.length;

    this.interval = setInterval(() => {
      this.getData();
    }, 1000);

    // this.setState({
    //   data: chart,
    //   totalRows: chartLength,
    // });
  }
  // }

  async getData() {
    const response = await axios.get(
      `https://api.bithumb.com/public/ticker/all`
    );
    // console.log(response.data);

    let chart = [];
    if (response.data.status === '0000') {
      delete response.data.data['date'];
      // console.log(response.data.data)
      for (let [key, value] of Object.entries(response.data.data)) {
        if (value['24H_fluctate_rate'] === 1) {
          chart.push({
            key: key,
            Price: `${value.sell_price}원`,
            FluctateRate: `+ ${value['24H_fluctate_rate']}`,
            Volume: value.volume_7day,
          });
        } else {
          chart.push({
            key: key,
            Price: `${value.sell_price}원`,
            FluctateRate: value['24H_fluctate_rate'],
            Volume: value.volume_7day,
          });
        }
      }
      this.setState({
        data: chart,
        totalRows: chart.length,
      });
    }
  }

  render() {
    const { loading, data, totalRows } = this.state;
    // console.log(data);

    return (
      <DataTable
        className="Post"
        title="Crypto Table"
        columns={columns}
        data={data}
        progressPending={loading}
        customTheme={darkTheme}
        pagination
        paginationTotalRows={totalRows}
      />
    );
  }
}

export default PostContainer;
