import axios from 'axios';


let instance = axios.create({
  baseURL: `https://api.lyrid.io/x/node/express/latest/entry/`,
  auth: {
    username: process.env.REACT_APP_LYRID_EXECUTE_KEY,
    password: process.env.REACT_APP_LYRID_EXECUTE_SECRET
  },
  withCredentials: true
});

/*
let instance = axios.create({
  baseURL: `http://localhost:3000/`
});
*/

export default instance;


