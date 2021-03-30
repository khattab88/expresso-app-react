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
        default:
            return auth;
    }
}

const _createAuthResponse = action => {
    console.log(action.payload);

    if(action.payload.status === "success") {
        return {
            authenticated: true,
            user: action.payload.data.data.user,
            token: action.payload.data.data.token,
            err: null
        }
    } else {
        return {
            authenticated: false,
            err: {
                statusCode: action.payload.err.response.data.error.statusCode,
                message: action.payload.err.response.data.message
            }
        }
    }
}

