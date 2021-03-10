import axios from 'axios';
import baseApi from './BaseApi';

class TagApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getTags(query) {
        try {
            const res = await this.baseApi.get("/tags");

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

export default new TagApi();