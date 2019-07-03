import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './PostContainer.css';
import { darkTheme, columns } from './tableSetting';

/* Component */
class PostContainer extends Component {
  state = {
    title: <div>Load data from API Server...</div>,
    status: <div>Wait</div>,
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
    let status;
    /* If API Status Success */
    if (response.data.status === '0000') {
      delete response.data.data['date'];

      // console.log(response.data.data)
      // console.log(Object.keys(response.data.data));
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
        statue: status,
        result: 'success',
        data: chart,
        totalRows: chart.length,
        title: (
          <div>
            <div className="logoContainer">
              <a href="https://www.bithumb.com/">
                <img
                  src="/images/bithumb.png"
                  alt="bithumb LOGO"
                  className="logo"
                />
              </a>
            </div>
            <div id="statusSuccess">{status}</div>
            <p className="apiSuccess"> API Works Fine</p>
          </div>
        ),
      });
    } else {
      /* If Server Status Fails */
      this.setState({
        statue: status,
        result: 'fail',
        title: (
          <div>
            <div className="logoContainer">
              <a href="https://www.bithumb.com/">
                <img
                  src="/images/bithumb.png"
                  alt="bithumb LOGO"
                  className="logo"
                />
              </a>
            </div>
            <div id="statusFail">{status}</div>
            <p className="apiFail"> API is not wokring. Something is Wrong</p>
          </div>
        ),
      });
    }
  }

  render() {
    const { data, totalRows, title } = this.state;
    // console.log(data);
    return (
      <DataTable
        title={title}
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
