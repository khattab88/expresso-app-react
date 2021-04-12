import * as actionTypes from '../actions/actionTypes';
import state from "../state";

export const addressesReducer = (addresses = state.addresses, action) => {
    switch (action.type) {
        case actionTypes.ADDRESSES_GET_ADDRESSES:
            return [...action.payload];
        case actionTypes.ADDRESSES_CREATE_ADDRESS:
            return [...addresses, action.payload];
        case actionTypes.ADDRESSES_UPDATE_ADDRESS:
            return addresses.map(address =>
                (address.id === action.payload.id) ? action.payload : address)
        case actionTypes.ADDRESSES_DELETE_ADDRESS:
            return addresses.filter(address => address.id !== action.payload.id)
        default:
            return addresses;
    }
}