import axios from 'axios';
import baseApi from './BaseApi';

class MenuApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async getRestaurantMenu(restaurantId) {
        try {
            const res = await this.baseApi.get(`/restaurants/${restaurantId}/menus`);

            const menu = res.data.data.docs[0];

            return {
                status: "success",
                err: null,
                data: menu
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

export default new MenuApi();