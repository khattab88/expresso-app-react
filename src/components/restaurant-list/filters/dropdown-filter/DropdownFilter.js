import React from 'react';

import FilterHead from './filter-head/FilterHead';
import TagList from './tag-list/TagList';

class DropdownFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.ref = React.createRef();

        this.toggle = this.toggle.bind(this);
        this.clearTags = this.clearTags.bind(this);

        this.onBodyClick = this.onBodyClick.bind(this);
    }

    componentDidMount() {
        document.body.addEventListener("click", this.onBodyClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.onBodyClick);
    }

    onBodyClick(e) {
        // console.log(e.target);

        if(this.ref.current && this.ref.current.contains(e.target)) {
            return;
        }

        this.setState({
            isOpen: false
        });
    };

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
            <div className={className} ref={this.ref}>
                <FilterHead toggle={this.toggle} selectedTags={this.props.selectedTags} clearTags={this.clearTags} />

                <TagList tags={this.props.tags} changeTags={this.props.changeTags} />
            </div>
        );
    }
}

export default DropdownFilter;