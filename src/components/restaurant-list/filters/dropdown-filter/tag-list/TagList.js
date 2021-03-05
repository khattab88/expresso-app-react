import React from 'react';

import Tag from '../tag/Tag';

class TagList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tagList = this.props.tags.map(tag =>
            <Tag tag={tag} key={tag.id} changeTags={this.props.changeTags} />
        );

        return (
            <ul className="filter-dropdown__cuisine-list">
                {(!this.props.tags && this.props.tags.length == 0) &&
                    <p>Loading...</p>
                }

                {tagList}
            </ul>
        );
    }
}

export default TagList;