import _ from "lodash";

import jsonPlaceHolder from '../../api/jsonPlaceHolder';


export const fetchPostsAndAuthors = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // const authorIds = _.uniq(_.map(getState().posts, "userId"));
    // authorIds.forEach(id => dispatch(fetchAuthor(id)));

    _.chain(getState().posts)
        .map("userId")
        .uniq()
        .forEach(id => dispatch(fetchAuthor(id)))
        .value();
};

export const fetchPosts = () =>
    async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({
            type: "POSTS/FETCH_POSTS",
            payload: response.data
        });
    };

export const fetchAuthor = (id) =>
    async dispatch => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);

        dispatch({
            type: "AUTHORS/FETCH_AUTHOR",
            payload: response.data
        });
    };

// export const fetchAuthor = id =>
//     dispatch => {
//         _fetchAuthor(id, dispatch)
//     }

// const _fetchAuthor = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({
//         type: "AUTHORS/FETCH_AUTHOR",
//         payload: response.data
//     })
// });
