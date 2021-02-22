function Tag(props) {
    return(
        <li className="restaurant-tags__tag-item" id={props.tag.id} >
            {props.tag.name}
        </li>
    );
}

export default Tag;