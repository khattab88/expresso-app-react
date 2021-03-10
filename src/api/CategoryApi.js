import axios from 'axios';
import baseApi from './BaseApi';

class CategoryApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getCategories() {
        try {
            const res = await this.baseApi.get("/categories");

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

export default new CategoryApi();