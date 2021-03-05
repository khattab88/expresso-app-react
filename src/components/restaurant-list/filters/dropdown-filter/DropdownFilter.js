import React from 'react';

import FilterHead from './filter-head/FilterHead';
import TagList from './tag-list/TagList';

class DropdownFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggle = this.toggle.bind(this);
        this.clearTags = this.clearTags.bind(this);
    }

    toggle(e) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    clearTags() {
        this.props.clearTags();
    }

    render() {
        const className = this.state.isOpen ?"filter-dropdown filter-dropdown--open" :"filter-dropdown";

        return (
            <div className={className}>
                <FilterHead toggle={this.toggle} selectedTags={this.props.selectedTags} clearTags={this.clearTags} />

                <TagList tags={this.props.tags} changeTags={this.props.changeTags} />
            </div>
        );
    }
}

export default DropdownFilter;