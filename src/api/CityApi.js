import axios from 'axios';
import baseApi from './BaseApi';

class CityApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getCities() {
        try {
            const res = await this.baseApi.get("/cities");

            const items = res.data.data.docs;

            return {
                status: "success",
                err: null,
                data: items
            }
        } catch (err) {
            // console.log(e);

            return {
                status: "fail",
                err: err,
            }
        }
    }
}

export default new CityApi();