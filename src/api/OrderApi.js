import axios from 'axios';
import baseApi from './BaseApi';

class OrderApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async createOrder(orderData) {
        try {
            const res = await this.baseApi.post(`/orders`, {...orderData});

            const item = res.data.data.doc;

            return {
                status: "success",
                err: null,
                data: item
            }
        } catch (err) {
            console.log(err);

            return {
                status: "fail",
                err: err,
            }
        }
    }

    async getUserOrders(userId) {
        try {
            const res = await this.baseApi.get(`/users/${userId}/orders`);

            const items = res.data.data.docs;

            return {
                status: "success",
                err: null,
                data: items
            }
        } catch (err) {
            console.log(err);

            return {
                status: "fail",
                err: err,
            }
        }
    }

    async getOrderItems(orderId) {
        try {
            const res = await this.baseApi.get(`/orders/${orderId}/orderitems`);

            const items = res.data.data.docs;

            return {
                status: "success",
                err: null,
                data: items
            }
        } catch (err) {
            console.log(err);

            return {
                status: "fail",
                err: err,
            }
        }
    }
}

export default new OrderApi();