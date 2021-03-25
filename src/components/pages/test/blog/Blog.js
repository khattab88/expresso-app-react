import "./Blog.scss";

import PostList from './components/post-list/PostList';

const Blog = (props) => {
    return(
        <section className="blog">
            <h2 className="blog__title">Blog</h2>

            <PostList />
        </section>
    );
};

export default Blog;