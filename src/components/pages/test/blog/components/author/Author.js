import { useEffect } from "react";

import { connect } from 'react-redux';

import { fetchAuthor } from "../../store/actions";

import "./Author.scss";

const Author = (props) => {

    useEffect(() =>{
        // console.log(props.id);

        // props.fetchAuthor(props.id);
    }, []);

    if(!props.author) return null;

    return(
        <div className="author">{props.author.name}</div>
    );
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state.authors);

    return { author: state.authors.find(author => author.id === ownProps.id) };
}

export default connect(mapStateToProps, { fetchAuthor })(Author);