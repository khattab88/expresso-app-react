import * as actionTypes from './actionTypes';
import authApi from '../../api/AuthApi';
import addressApi from "../../api/AddressApi";

/* Selected Country */
export const selectCountry = (country) => {
    return {
        type: actionTypes.COUNTRIES_SELECT_COUNTRY,
        payload: country
    }
}

/* Selected Area */
export const selectArea = (area) => {
    return {
        type: actionTypes.AREAS_SELECT_AREA,
        payload: area
    }
}

/* Selected Category */
export const selectCategory = (category) => {
    return {
        type: actionTypes.CATEGORIES_SELECT_CATEGORY,
        payload: category
    }
}

/* Selected Branch */
export const selectBranch = (branch) => {
    return {
        type: actionTypes.BRANCHES_SELECT_BRANCH,
        payload: branch
    }
}

export const clearBranch = () => {
    return {
        type: actionTypes.BRANCHES_CLEAR_BRANCH
    }
}

/* Cart */
export const addCartItem = cartItem => {
    return {
        type: actionTypes.CART_ADD_CART_ITEM,
        payload: cartItem
    }
}

export const removeCartItem = id => {
    return {
        type: actionTypes.CART_REMOVE_CART_ITEM,
        payload: { id }
    }
}

export const updateCartItemCount = (id, count) => {
    return {
        type: actionTypes.CART_UPDATE_CART_ITEM_COUNT,
        payload: { id, count }
    }
}

export const clearCart = () => {
    return {
        type: actionTypes.CART_CLEAR_CART
    }
}


/* Auth */
export const signUp = (signupData) =>
    async dispatch => {
        const response = await authApi.signUp(signupData);

        // console.log(response.data.data.token);

        _saveAuthData(response);

        dispatch({
            type: actionTypes.AUTH_SIGNUP,
            payload: response
        });
    }

export const login = (loginData) =>
    async dispatch => {
        const response = await authApi.login(loginData);

        // console.log(response.data.data.token);

        _saveAuthData(response);

        dispatch({
            type: actionTypes.AUTH_LOGIN,
            payload: response
        });
    }

export const logout = () => {
    localStorage.removeItem('expresso_token');
    localStorage.removeItem('expresso_user');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const onAuthSuccess = () => {

    const token = localStorage.getItem('expresso_token');
    const user = JSON.parse(localStorage.getItem('expresso_user'));

    return {
        type: actionTypes.AUTH_SUCCEEDED,
        payload: {
            data: {
                data: {
                    token,
                    data: {
                        user
                    }
                }
            }
        }
    }
}

export const onAuthFail = () => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: {
            err: {
                response: {
                    data: {
                        message: "sorry, you are not logged in!",
                        error: {
                            statusCode: 400
                        }
                    }
                }
            }
        }
    }
}

export const checkAuth = () => {
    return dispatch => {

        const token = localStorage.getItem('expresso_token');
        const user = JSON.parse(localStorage.getItem('expresso_user'));

        if (!token) {
            dispatch(logout());
            // dispatch(onAuthFail());
        } else {
            dispatch(onAuthSuccess());
        }
    }
}

export const updateProfile = (profileData) =>
    async dispatch => {
        const response = await authApi.updateProfile(profileData);

        console.log(response);

        const user = response.data.data.data.updatedUser;
        localStorage.setItem("expresso_user", JSON.stringify(user));

        dispatch({
            type: actionTypes.AUTH_UPDATE_PROFILE,
            payload: { user }
        });
    }

const _saveAuthData = response => {
    try {
        const token = response.data.data.token;
        localStorage.setItem('expresso_token', token);

        const user = response.data.data.data.user;
        localStorage.setItem("expresso_user", JSON.stringify(user));
    } catch (err) {
        // console.error(err);
    }
}


/* Addresses */
export const getUserAddresses = (userId) =>
    async dispatch => {
        const response = await addressApi.getUserAddresses(userId);

        const addresses = response.data;

        dispatch({
            type: actionTypes.ADDRESSES_GET_ADDRESSES,
            payload: addresses
        });
    }

export const createAddress = (addressData) =>
    async dispatch => {
        const response = await addressApi.createAddress(addressData);

        // console.log(response);

        dispatch({
            type: actionTypes.ADDRESSES_CREATE_ADDRESS,
            payload: response.data
        })
    }

export const updateAddress = (id, addressData) =>
    async dispatch => {
        const response = await addressApi.updateAddress(id, addressData);

        // console.log(response);

        dispatch({
            type: actionTypes.ADDRESSES_UPDATE_ADDRESS,
            payload: response.data
        })
    }

export const deleteAddress = (id) =>
    async dispatch => {
        const response = await addressApi.deleteAddress(id);

        // console.log(response);

        dispatch({
            type: actionTypes.ADDRESSES_DELETE_ADDRESS,
            payload: { id }
        })
    }
