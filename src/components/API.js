import axios from 'axios';

export function data() {
  console.log(axios.get(`https://api.bithumb.com/public/ticker/all`));
  return axios.get(`https://api.bithumb.com/public/ticker/all`);
}
