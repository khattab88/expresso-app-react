import axios from 'axios';
import baseApi from './BaseApi';

class CountryApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getCountries() {
        try {
            const res = await this.baseApi.get("/countries");

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

export default new CountryApi();