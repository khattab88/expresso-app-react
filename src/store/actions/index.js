import * as actionTypes from './actionTypes';
import authApi from '../../api/AuthApi';

export const selectCountry = (country) => {
    return {
        type: actionTypes.COUNTRIES_SELECT_COUNTRY,
        payload: country
    }
}

export const selectArea = (area) => {
    return {
        type: actionTypes.AREAS_SELECT_AREA,
        payload: area
    }
}

export const selectCategory = (category) => {
    return {
        type: actionTypes.CATEGORIES_SELECT_CATEGORY,
        payload: category
    }
}

export const selectBranch = (branch) => {
    return {
        type: actionTypes.BRANCHES_SELECT_BRANCH,
        payload: branch
    }
}

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

export const signUp = (signupData) =>
    async dispatch => {
        const response = await authApi.signUp(signupData);

        // console.log(response.data.data.token);

        _saveTokenIfExists(response);

        dispatch({
            type: actionTypes.AUTH_SIGNUP,
            payload: response
        });
    }

export const login = (loginData) =>
    async dispatch => {
        const response = await authApi.login(loginData);

        // console.log(response.data.data.token);

        _saveTokenIfExists(response);

        dispatch({
            type: actionTypes.AUTH_LOGIN,
            payload: response
        });
    }

export const logout = () => {
    localStorage.removeItem('expresso_token');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}



const _saveTokenIfExists = response => {
    try {
        const token = response.data.data.token;
        localStorage.setItem('expresso_token', token);
    } catch (err) {
        // console.error(err);
    }
}
