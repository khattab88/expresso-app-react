import * as actionTypes from '../actions/actionTypes';
import state from "../state";

export const addressesReducer = (addresses = state.addresses, action) => {
    switch (action.type) {
        case actionTypes.ADDRESSES_GET_ADDRESSES:
            return [...action.payload];
        default:
            return addresses;
    }
}