import axios from 'axios';
import baseApi from './BaseApi';

class TagApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getTags(query) {
        try {
            let params = {};
            if (query) params = { name: query };

            const res = await this.baseApi.get("/tags", { params });

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