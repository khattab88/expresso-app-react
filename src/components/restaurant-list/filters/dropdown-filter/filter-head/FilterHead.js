import React from 'react';

class FilterHead extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.clearTags = this.clearTags.bind(this);
    }

    toggle() {
        this.props.toggle();
    }

    clearTags() {
        this.props.clearTags();
    }

    render() {
        const selectedCount = Object.keys(this.props.selectedTags).length;
        const countLabelVisible = selectedCount ? "filter-dropdown__count--visible" : "";
        const clearBtnVisible = selectedCount ? "filter-dropdown__clear--visible" : "";

        return (
            <div className="filter-dropdown__head" onClick={this.toggle}>
                <i className="filter-dropdown__icon fa fa-filter">
                    <span className={`filter-dropdown__count ${countLabelVisible}`}>{selectedCount}</span>
                </i>
                <p className="filter-dropdown__title">Filter by types of food</p>
                <i className="filter-dropdown__icon filter-dropdown__icon--angle-down fa fa-angle-down"></i>
                <span className={`filter-dropdown__clear ${clearBtnVisible}`} onClick={this.clearTags}>Clear all</span>
            </div>
        );
    }
}

export default FilterHead;