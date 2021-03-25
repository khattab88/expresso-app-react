export default (state = [], action) => {
    switch (action.type) {
        case "POSTS/FETCH_POSTS":
            return action.payload;
        default:
            return state;
    }
}