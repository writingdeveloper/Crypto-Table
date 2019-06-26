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
  },
  {
    name: 'Volume',
    selector: 'Volume',
    sortable: true,
    right: true,
  },
];

export { darkTheme, columns };
