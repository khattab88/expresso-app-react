import * as actionTypes from '../actions/actionTypes';
import state from "../state";

export const cartReducer = (cart = state.cart, action) => {
    switch (action.type) {
        case actionTypes.CART_ADD_CART_ITEM:
            return [...cart, action.payload];
        case actionTypes.CART_REMOVE_CART_ITEM:
            return cart.filter(cartItem => cartItem.itemId !== action.payload.id);
        case actionTypes.CART_UPDATE_CART_ITEM_COUNT:
            return cart.map(cartItem =>
                (cartItem.itemId === action.payload.id)
                    ? {...cartItem, count: action.payload.count}
                    : cartItem)
        default:
            return cart;
    }
}