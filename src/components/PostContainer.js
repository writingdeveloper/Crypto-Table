import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './PostContainer.css';

const darkTheme = {
  title: {
    fontSize: '22px',
    fontColor: '#FFFFFF',
    backgroundColor: '#363640',
  },
  contextMenu: {
    backgroundColor: '#E91E63',
    fontColor: '#FFFFFF',
  },
  header: {
    fontSize: '12px',
    fontColor: '#FFFFFF',
    backgroundColor: '#363640',
  },
  rows: {
    fontColor: '#FFFFFF',
    backgroundColor: '#363640',
    borderColor: 'rgba(255, 255, 255, .12)',
    hoverFontColor: 'black',
    hoverBackgroundColor: 'rgba(0, 0, 0, .24)',
  },
  cells: {
    cellPadding: '48px',
  },
  pagination: {
    fontSize: '13px',
    fontColor: '#FFFFFF',
    backgroundColor: '#363640',
    buttonFontColor: '#FFFFFF',
    buttonHoverBackground: 'rgba(255, 255, 255, .12)',
  },
  expander: {
    fontColor: '#FFFFFF',
    backgroundColor: '#363640',
  },
};
// const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
const columns = [
  {
    name: 'Coin Name',
    selector: 'key',
    sortable: true,
  },
  {
    name: 'Current Price',
    selector: 'Price',
    sortable: true,
    right: true,
  },
  {
    name: 'Volume',
    selector: 'Volume',
    sortable: true,
    right: true,
  },

];



class PostContainer extends Component {
  state = {
    data: [],
    loading: false,
    totalRows: 0,
    perPage: 10,
  };

  async componentDidMount() {
    const { perPage } = this.state;
    this.setState({ loading: false }); //true

    const response = await axios.get(`https://api.bithumb.com/public/ticker/all`);
    console.log(response.data);

    let chart = [];
    // console.log(data);
    if (response.data.status === '0000') {
      delete response.data.data['date'];
      console.log(response.data.data)
      for (let [key, value] of Object.entries(response.data.data)) {
        chart.push({ 'key': key, 'Price': value.sell_price, 'Volume': value.volume_7day });


      }
      console.log(chart);

      this.interval = setInterval(() => {
        this.getData();
      }, 1000);

      this.setState({
        data: chart,
        totalRows: chart.length,
        loading: false,
      });
    }
  }

  async getData() {
    const { perPage } = this.state;
    this.setState({ loading: false }); //true

    const response = await axios.get(`https://api.bithumb.com/public/ticker/all`);
    // console.log(response.data);

    let chart = [];
    if (response.data.status === '0000') {
      delete response.data.data['date'];
      // console.log(response.data.data)
      for (let [key, value] of Object.entries(response.data.data)) {
        chart.push({ 'key': key, 'Price': `${value.sell_price}원`, 'Volume': value.volume_7day });
      }
      this.setState({
        data: chart,
        totalRows: chart.length,
        loading: false,
      });
    }
  }


  render() {
    const { loading, data, totalRows } = this.state;
    console.log(data);

    return (
      <DataTable className="Post"
        title="Crypto Table"
        columns={columns}
        data={data}
        progressPending={loading}
        fixedHeader
        fixedHeaderScrollHeight="600px"
        customTheme={darkTheme}
      // pagination
      // paginationServer
      // paginationTotalRows={totalRows}
      />
    )
  }
};


export default PostContainer;