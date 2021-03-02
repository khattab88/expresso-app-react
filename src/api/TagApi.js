import axios from 'axios';
import baseApi from './BaseApi';

class TagApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getTags(query) {
        let params = {};
        if(query) params = { name: query };

        const res = await this.baseApi.get("/api/v1/tags", {params});
    
        const items = res.data.data.docs;
        return items;
    }    
}

export default new TagApi();