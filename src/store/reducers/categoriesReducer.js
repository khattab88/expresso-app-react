import * as actionTypes from '../actions/actionTypes';
import state from "../state";

export const selectedCategoryReducer = (selectedCategory = state.selectedCategory, action) => {
    switch (action.type) {
        case actionTypes.CATEGORIES_SELECT_CATEGORY:
            return action.payload;
        default:
            return selectedCategory;
    }
}