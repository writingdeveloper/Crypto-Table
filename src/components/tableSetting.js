import React from 'react';

/* Theme Setting */
const darkTheme = {
  // title: {
  //   fontSize: '22px',
  //   fontColor: '#FFFFFF',
  //   backgroundColor: '#363640',
  // },
  // contextMenu: {
  //   backgroundColor: '#E91E63',
  //   fontColor: '#FFFFFF',
  // },
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
    // fontSize: '13px',
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
    cell: row => (
      <a
        href={'https://www.bithumb.com/trade/order/' + row.key}
        target="_blank"
        rel="noopener noreferrer">
        {row.key}
      </a>
    ),
  },
  {
    name: 'Current Price',
    selector: 'Price',
    sortable: true,
    right: true,
  },
  {
    name: '24Hours Fluctate',
    selector: 'FluctateRate',
    sortable: true,
    right: true,
    ignoreRowClick: true,
    cell: row => {
      if (row.FluctateRate < 0) {
        return (
          <div class="minus">
            {row.FluctateRate}% ({row.FluctateRate24}원)
          </div>
        );
      } else {
        return (
          <div class="plus">
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
    right: true,
  },
];

export { darkTheme, columns };
