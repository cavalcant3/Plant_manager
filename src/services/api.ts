import axios from 'axios';

const api = axios.create({
  baseURL: 'https://192.168.0.106:3030',
});

export default api;

