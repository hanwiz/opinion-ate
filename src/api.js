import axios from "axios";

const client = axios.create({
  baseURL: 'https://outside-in-dev-api.herokuapp.com/A2h2hdhHpLEQPaT1AFIawq6S57xeBkKu',  
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
