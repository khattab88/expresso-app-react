import state from "../state";

export const selectedCategoryReducer = (selectedCategory = state.selectedCategory, action) => {
    switch (action.type) {
        case "CATEGORIES/SELECT_CATEGORY":
            return action.payload;
        default:
            return selectedCategory;
    }
}