import React from 'react';

import Tag from './tag/Tag';

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

        const selectedCount = Object.keys(this.props.selectedTags).length;
        const countLabelVisible = selectedCount ? "filter-dropdown__count--visible" : "";
        const clearBtnVisible = selectedCount ? "filter-dropdown__clear--visible" : "";

        const tagList = this.props.tags.map(tag =>
            <Tag tag={tag} key={tag.id} changeTags={this.props.changeTags} />
        );

        return (
            <div className={className}>
                <div className="filter-dropdown__head" onClick={this.toggle}>
                    <i className="filter-dropdown__icon fa fa-filter">
                        <span className={`filter-dropdown__count ${countLabelVisible}`}>{selectedCount}</span>
                    </i>
                    <p className="filter-dropdown__title">Filter by types of food</p>
                    <i className="filter-dropdown__icon filter-dropdown__icon--angle-down fa fa-angle-down"></i>
                    <span className={`filter-dropdown__clear ${clearBtnVisible}`} onClick={this.clearTags}>Clear all</span>
                </div>
                <ul className="filter-dropdown__cuisine-list">
                    {(!this.props.tags && this.props.tags.length == 0) &&
                        <p>Loading...</p>
                    }

                    {tagList}
                </ul>
            </div>
        );
    }
}

export default DropdownFilter;