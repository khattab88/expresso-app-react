/* Action Creators */

// export const fetchProducts = (products) => {
//     return {
//         type: "PRODUCTS/FETCH_PRODUCTS",
//         payload: products
//     };
// };

export const selectProduct = (product) => {
    return {
        type: "PRODUCTS/SELECT_PRODUCT",
        payload: product
    };
};

export const addCartItem = (cartItem) => {
    return {
        type: "CART/ADD_CART_ITEM",
        payload: { ...cartItem, count: 1}
    };
};

export const removeCartItem = (id) => {
    return {
        type: "CART/REMOVE_CART_ITEM",
        payload: { id }
    };
};

export const updateCartItemCount = (id, count) => {
    return {
        type: "CART/UPDATE_CART_ITEM_COUNT",
        payload: {
            id,
            count    
        }
    };
};