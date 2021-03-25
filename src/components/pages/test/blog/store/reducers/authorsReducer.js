export default (state = [], action) => {
    switch (action.type) {
        case "AUTHORS/FETCH_AUTHOR":
            return [...state, action.payload];
        default:
            return state;
    }
}