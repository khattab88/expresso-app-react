import axios from 'axios';
import baseApi from './BaseApi';

class AddressApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getUserAddresses(userId) {
        try {
            const res = await this.baseApi.get(`/users/${userId}/addresses`);

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

    async createAddress(addressData) {
        try {
            const res = await this.baseApi.post(`/addresses`, {...addressData});

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

export default new AddressApi();