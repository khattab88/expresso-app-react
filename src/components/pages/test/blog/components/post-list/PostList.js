import { useEffect } from "react";

import { connect } from 'react-redux';

import { fetchPosts, fetchPostsAndAuthors } from '../../store/actions';

import "./PostList.scss";

import Author from "../author/Author";

const PostList = ({ posts, fetchPosts, fetchPostsAndAuthors }) => {

    useEffect(() => {
        // fetchPosts();
        fetchPostsAndAuthors();
    }, []);


    return (
        <ul className="post-list">
            {
                posts.slice(0, 19).map(post =>
                    <li className="post" id={post.id} key={post.id}>
                        <div className="post__content">
                            <p className="post__title">{post.title}</p>
                            <p className="post__body">{post.body}</p>
                        </div>
                        <Author id={post.userId} />
                    </li>
                )
            }
        </ul>
    );
};

const mapStateToProps = state => {
    // console.log(state);

    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { 
    fetchPosts,
    fetchPostsAndAuthors 
})(PostList);