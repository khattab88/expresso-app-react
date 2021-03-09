import axios from 'axios';

const axiosInstance = axios.create();

/* DEFAULTS */
axiosInstance.defaults.baseURL = 'http://localhost:3000/api/v1';
axiosInstance.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(request => {
    // console.log(request);
    return request;
}, error => {
    // console.log(error);
    return Promise.reject(error);
});

/* INTERCEPTORS */
axiosInstance.interceptors.response.use(response => {
    // console.log(response);
    return response;
}, error => {
    // console.log(error);
    return Promise.reject(error);
});

export default axiosInstance;