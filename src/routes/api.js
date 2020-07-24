//Conexão com o back end, utilizar comandos do axios para fazer as chamadas da api


import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
  });

export default api;