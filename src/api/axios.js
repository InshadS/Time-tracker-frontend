import axios from 'axios';

const EXPRESS_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';

const instance = axios.create({
  baseURL: EXPRESS_URL,
});

export default instance;
