import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { darkTheme, columns } from './tableSetting';

/* Price Comma Function */
function addComma(num) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}

/* Component */
class PostContainer extends Component {
  state = {
    title: <div>Load data from API Server...</div>,
    status: <div>Wait</div>,
    data: [],
  };

  /* Error Catch */
  componentDidCatch(error, info) {
    console.error(error, info);
  }

  async componentDidMount() {
    /* Exchange Rate USD to KRW */
    const exchangeResponse = await axios.get(
      `https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD`
    );
    const exchangeData = exchangeResponse.data[0].basePrice;
    // getCoinData(exchangeData);
    this.interval = setInterval(() => {
      this.getCoinData(exchangeData);
    }, 5000); // Interval 5 Seconds
  }

  async getCoinData(exchangeData) {
    let chartData = []; //
    let status;
    const response = await axios.get(
      `https://api.bithumb.com/public/ticker/all`
    );
    const usdCoinData = await axios.get(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DASH,LTC,ETC,XRP,BCH,XMR,ZEC,QTUM,BTG,EOS,ICX,VET,TRX,ELF,MITH,MCO,OMG,KNC,GNT,ZIL,ETHOS,PAY,WAX,POWR,LRC,GTO,STEEM,STRAT,ZRX,REP,AE,XEM,SNT,ADA,PPT,CTXC,CMT,THETA,WTC,ITC,TRUE,ABT,RNT,PLY,WAVES,LINK,ENJ,PST,SALT,RDN,LOOM,PIVX,INS,BCD,BZNT,XLM,OCN,BSV,TMTG,BAT,WET,XVG,IOST,POLY,HC,ROM,AMO,ETZ,ARN,APIS,MTL,DACC,DAC,BHP,BTT,HDAC,NPXS,AUTO,GXC,ORBS,VALOR,CON,ANKR,MIX&tsyms=USD`
    );

    /* If API Status Success */
    if (response.data.status === '0000') {
      delete response.data.data['date'];

      for (let [key, value] of Object.entries(response.data.data)) {
        let premiumPrice;
        let premiumPriceGap;
        if (typeof usdCoinData.data.DISPLAY[key] === 'undefined') {
          premiumPrice = '-';
          premiumPriceGap = '-';
        } else {
          let usdPrice =
            usdCoinData.data.DISPLAY[key].USD.PRICE.replace('$ ', '').replace(
              ',',
              ''
            ) * exchangeData;
          premiumPrice = (
            ((value.sell_price - usdPrice) / usdPrice) *
            100
          ).toFixed(2);
          premiumPriceGap = (value.sell_price - usdPrice).toFixed(2);
        }

        if (Math.sign(value['24H_fluctate_rate']) === 1) {
          chartData.push({
            key: key,
            Price: `${addComma(value.sell_price)}원`,
            FluctateRate: `${value['24H_fluctate_rate']}`,
            FluctateRate24: `${addComma(value['24H_fluctate'])}`,
            premium: addComma(premiumPrice),
            premiumGap: addComma(premiumPriceGap),
          });
        } else {
          chartData.push({
            key: key,
            Price: `${addComma(value.sell_price)}원`,
            FluctateRate: `${value['24H_fluctate_rate']}`,
            FluctateRate24: `${addComma(value['24H_fluctate'])}`,
            premium: addComma(premiumPrice),
            premiumGap: addComma(premiumPriceGap),
          });
        }
      }

      this.setState({
        statue: status,
        result: 'success',
        data: chartData,
        title: (
          <div>
            <div className="logoContainer">
              <a
                href="https://www.bithumb.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://github.com/sangumee/Crypto-Table/blob/master/public/images/bithumb.png?raw=true"
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
              <a
                href="https://www.bithumb.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://github.com/sangumee/Crypto-Table/blob/master/public/images/bithumb.png?raw=true"
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
    const { data, title } = this.state;
    // console.log(data);
    return (
      <DataTable
        title={title}
        className="Post"
        columns={columns}
        data={data}
        customTheme={darkTheme}
        responsive={true}
        noDataComponent="Loading..."
        fixedHeader
      />
    );
  }
}

export default PostContainer;
