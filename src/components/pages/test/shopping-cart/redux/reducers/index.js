import { combineReducers } from "redux";

const productsReducer = () => {
    return [
        { id: "1", name: "cheese burger", img: "/assets/img/items/item-1.png", price: 50 },
        { id: "2", name: "double cheese burger", img: "/assets/img/items/item-2.png", price: 65 },
        { id: "3", name: "chicken burger", img: "/assets/img/items/item-3.png", price: 45 },
        { id: "4", name: "double cheese burger", img: "/assets/img/items/item-4.png", price: 55 },
        { id: "5", name: "cola", img: "/assets/img/items/item-5.png", price: 15 },
    ];
};

const selectedProductReducer = (selectedProduct = null, action) => {
    if(action.type === "PRODUCTS/SELECT_PRODUCT") {
        return action.payload;
    }

    return selectedProduct;
};

const cartReducer = (cart = [], action) => {
    if(action.type === "CART/ADD_CART_ITEM") {

        /* check if cart item alreday exists, 
            if true incremet item count
            else add item to cart 
        */

        const cartItem = cart.find(item => item.id === action.payload.id);

        if(cartItem) {
            const newCount = cartItem.count + 1;

            return cart.map(item =>
                (item.id === action.payload.id)
                    ? {...item, count: newCount}
                    : item
            );
        }

        return [
            ...cart,
            action.payload
        ];
    } 
    else if(action.type === "CART/REMOVE_CART_ITEM") {
        return cart.filter(item => item.id !== action.payload.id);
    }
    else if(action.type === "CART/UPDATE_CART_ITEM_COUNT") {
        return cart.map(item =>
            (item.id === action.payload.id)
                ? {...item, count: item.count + action.payload.count}
                : item
        );
    }

    return cart;
};

export default combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    cart: cartReducer
});