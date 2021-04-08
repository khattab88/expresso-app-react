import axios from 'axios';
import baseApi from './BaseApi';

class AuthApi {
    constructor() {
        this.baseApi = baseApi;
    }

    async signUp(signUpData) {
        try {
            const res = await this.baseApi.post("/auth/signup", {...signUpData});

            const item = res.data;

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

    async login(loginData) {
        try {
            const res = await this.baseApi.post("/auth/login", {...loginData});

            const item = res;

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

    async updateProfile(profileData) {
        try {
            const res = await this.baseApi.patch("/auth/updateMe", {...profileData});

            const item = res;

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

export default new AuthApi();