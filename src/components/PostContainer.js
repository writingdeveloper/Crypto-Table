import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './PostContainer.css';
import { darkTheme, columns } from './tableSetting';

/* Component */
class PostContainer extends Component {
  state = {
    data: [],
    totalRows: 86,
  };

  async componentDidMount() {
    this.interval = setInterval(() => {
      this.getData();
    }, 1000);
  }

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
        if (Math.sign(value['24H_fluctate_rate']) === 1) {
          chart.push({
            key: key,
            Price: `${value.sell_price}원`,
            FluctateRate: `${value['24H_fluctate_rate']}`,
            FluctateRate24: `${value['24H_fluctate']}`,
            Volume: `${Number(value.volume_7day).toFixed(5)} ${key}`,
          });
        } else {
          chart.push({
            key: key,
            Price: `${value.sell_price}원`,
            FluctateRate: `${value['24H_fluctate_rate']}`,
            FluctateRate24: `${value['24H_fluctate']}`,
            Volume: `${Number(value.volume_7day).toFixed(5)} ${key}`,
          });
        }
      }
      this.setState({
        data: chart,
        totalRows: chart.length,
      });
    }
  }

  // for (let [key, value] of Object.entries(response.data.data)) {
  //   if (Math.sign(value['24H_fluctate_rate']) === 1) {
  //     chart.push({
  //       key: key,
  //       Price: `${value.sell_price}원`,
  //       FluctateRate: `+ ${value['24H_fluctate_rate']}% (${
  //         value['24H_fluctate']
  //       }원)`,
  //       Volume: `${Number(value.volume_7day).toFixed(5)} ${key}`,
  //     });
  //   } else {
  //     chart.push({
  //       key: key,
  //       Price: `${value.sell_price}원`,
  //       FluctateRate: `${value['24H_fluctate_rate']}% (${
  //         value['24H_fluctate']
  //       }원)`,
  //       Volume: `${Number(value.volume_7day).toFixed(5)} ${key}`,
  //     });
  //   }
  // }

  render() {
    const { data, totalRows } = this.state;
    // console.log(data);
    return (
      <DataTable
        noHeader
        className="Post"
        columns={columns}
        data={data}
        customTheme={darkTheme}
        pagination={true}
        paginationTotalRows={totalRows}
        paginationPerPage={10}
        responsive={true}
      />
    );
  }
}

export default PostContainer;
