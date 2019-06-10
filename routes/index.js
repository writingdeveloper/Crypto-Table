var express = require('express');
var router = express.Router();

const request = require('request');
const cheerio = require('cheerio');

const TeleBot = require('telebot');
const bot = new TeleBot('589466008:AAHR4YcrcHIvhVnU_E3xQigoGxAmvphJEEc');

// bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));


// let url = "https://www.bithumb.com/";

// function parseData() {
//   request(url, function (error, response, body) {
//     let $ = cheerio.load(body);
//     let BTC = $("#assetRealBTC").text();
//     let ETH = $("#assetRealETH").text();
//     // console.log(BTC);
//     // console.log(ETH);
//     bot.sendMessage('550566016', `Bitcoin : ${BTC} \nEthereum : ${ETH}`).then((response) => {
//       // console.log('Ok:', response);
//     }).catch((error) => {
//       console.log('Error:', error);
//     });
//   });
// }
// setInterval(() => {
//   parseData();
// }, 5000);



/* GET home page. */
router.get('/', function (req, res, next) {
  let url = `https://api.bithumb.com/public/ticker/all`;

  request(url, function (error, response, body) {
    let dataArray = JSON.parse(body); // Parsed Data to JSON
    /* Remove date data Process */
    dataArray.data.date = undefined;
    delete dataArray.data.date;

    res.render('index', {
      title: 'Coin',
      dataArray
    })
  });
});

module.exports = router;