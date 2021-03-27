import state from "../state";

export const cartReducer = (cart = state.cart, action) => {
    switch (action.type) {
        case "CART/ADD_CART_ITEM":
            return [...cart, action.payload];
        case "CART/REMOVE_CART_ITEM":
            return cart.filter(cartItem => cartItem.itemId !== action.payload.id);
        case "CART/UPDATE_CART_ITEM_COUNT":
            return cart.map(cartItem =>
                (cartItem.itemId === action.payload.id)
                    ? {...cartItem, count: action.payload.count}
                    : cartItem)
        default:
            return cart;
    }
}