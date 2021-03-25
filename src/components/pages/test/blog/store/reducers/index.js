import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import authorsReducer from "./authorsReducer";

export default combineReducers({
    posts: postsReducer,
    authors: authorsReducer
});