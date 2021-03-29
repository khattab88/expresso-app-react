import axios from 'axios';


const axiosInstance = axios.create();

/* DEFAULTS */
axiosInstance.defaults.baseURL = process.env.REACT_APP_API_URL;

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("expresso_token")}`;

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