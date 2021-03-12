import axios from 'axios';
import baseApi from './BaseApi';

class BranchApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getBranches() {
        try {
            const res = await this.baseApi.get("/branches");

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

    async getBranchesByArea(areaId) {
        try {
            const res = await this.baseApi.get(`areas/${areaId}/branches`);

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

export default new BranchApi();