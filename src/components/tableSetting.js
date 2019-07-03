import React from 'react';
import { coinNameKR } from './coinName';
/* Theme Setting */
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
    cellPadding: '10px',
  },
  pagination: {
    fontColor: '#FFFFFF',
    backgroundColor: '#363640',
    buttonFontColor: '#FFFFFF',
    buttonHoverBackground: 'rgba(255, 255, 255, .12)',
  },
};

/* Columns Setting */
const columns = [
  {
    name: 'Coin Name',
    selector: 'key',
    sortable: true,
    ignoreRowClick: true,
    width: '25%',
    cell: row => {
      function getKeyByValue(object, row) {
        // Data from coinName.js Object
        return object[row]; // Returns Korean Coin Name
      }
      return (
        <a
          className="coinName"
          href={'https://www.bithumb.com/trade/order/' + row.key}
          target="_blank"
          rel="noopener noreferrer">
          {row.key}
          <span className="sub">
            {getKeyByValue(coinNameKR.bithumb, row.key)}
          </span>
        </a>
      );
    },
  },
  {
    name: 'Current Price',
    selector: 'Price',
    sortable: true,
    // right: true,
    width: '25%',
    // maxWidth: '20%',
  },
  {
    name: '24Hours Fluctate',
    selector: 'FluctateRate',
    sortable: true,
    // right: true,
    ignoreRowClick: true,
    cell: row => {
      if (row.FluctateRate < 0) {
        return (
          <div className="minus">
            {row.FluctateRate}% ({row.FluctateRate24}원)
          </div>
        );
      } else {
        return (
          <div className="plus">
            +{row.FluctateRate}% (+{row.FluctateRate24}원)
          </div>
        );
      }
    },
  },
  {
    name: 'Volume',
    selector: 'Volume',
    sortable: true,
    // right: true,
  },
];

export { darkTheme, columns };
