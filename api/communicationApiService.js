import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api-dhanman-communication-nonprod.azurewebsites.net/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});


export default apiClient;

