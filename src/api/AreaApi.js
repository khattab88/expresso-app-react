import axios from 'axios';
import baseApi from './BaseApi';

class AreaApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getAreas() {
        try {
            const res = await this.baseApi.get("/areas");

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

    async getAreaById(id) {
        try {
            const res = await this.baseApi.get(`/areas/${id}`);

            const item = res.data.data.doc;

            return {
                status: "success",
                err: null,
                data: item
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

export default new AreaApi();