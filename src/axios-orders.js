import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-07.firebaseio.com'
});

export default instance;