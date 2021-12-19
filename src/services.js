import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://reqres.in/api/'
});


const api = {
    get(endpoint){
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },
}

export default api;