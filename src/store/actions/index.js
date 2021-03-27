export const selectArea = (area) => {
    return {
        type: 'AREAS/SELECT_AREA',
        payload: area
    }
}

export const selectCountry = (country) => {
    return {
        type: 'COUNTRIES/SELECT_COUNTRY',
        payload: country
    }
}

export const selectCategory = (category) => {
    return {
        type: 'CATEGORIES/SELECT_CATEGORY',
        payload: category
    }
}

export const addCartItem = cartItem => {
    return {
        type: "CART/ADD_CART_ITEM",
        payload: cartItem
    }
}

export const removeCartItem = id => {
    return {
        type: "CART/REMOVE_CART_ITEM",
        payload: { id }
    }
}

export const updateCartItemCount = (id, count) => {
    return {
        type: "CART/UPDATE_CART_ITEM_COUNT",
        payload: { id, count }
    }
}