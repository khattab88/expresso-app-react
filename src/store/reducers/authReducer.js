import * as actionTypes from '../actions/actionTypes';
import state from "../state";

export const authReducer = (auth = state.auth, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SIGNUP:
            return _createAuthResponse(action);
        case actionTypes.AUTH_LOGIN:
            return _createAuthResponse(action);
        case actionTypes.AUTH_LOGOUT:
            return state.auth;
        case actionTypes.AUTH_SUCCEEDED:
            return _createSuccessResponse(action);
        case actionTypes.AUTH_FAILED:
            return _createFailResponse(action);
        default:
            return auth;
    }
}

const _createAuthResponse = action => {
    // console.log(action.payload);

    if(action.payload.status === "success") {
        return _createSuccessResponse(action);
    } else {
        return _createFailResponse(action);
    }
}

const _createSuccessResponse = action => {
    return {
        isLoggedIn: true,
        user: action.payload.data.data.data.user,
        token: action.payload.data.data.token,
        err: null
    }
}

const _createFailResponse = action => {
    return {
        isLoggedIn: false,
        err: {
            statusCode: action.payload.err.response.data.error.statusCode,
            message: action.payload.err.response.data.message
        }
    }
}