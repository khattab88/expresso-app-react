import React from 'react';

class Tag extends React.Component {
    constructor(props) {
        super(props);

        this.checkbox = React.createRef();

        this.state = {
            selected: false,
        };

        this.selectTag = this.selectTag.bind(this);
    }

    selectTag(e) {
        this.setState({
            selected: !this.state.selected
        },
        () => {
            // this.checkbox.current.checked = this.state.selected;

            const target = e.target.closest(".filter-dropdown__cuisine-item");

            this.props.changeTags({
                id: target.dataset["tagId"],
                name: target.dataset["tagName"],
                selected: target.dataset["selected"]
            });
        });
    }

    render() {
        const selectedClass = this.state.selected ?"filter-dropdown__cuisine-name--selected" :"";

        return (
            <li className="filter-dropdown__cuisine-item" onClick={this.selectTag} data-selected={this.state.selected}
                data-tag-id={this.props.tag.id} data-tag-name={this.props.tag.name}>
                {/* <input type="checkbox" className="filter-dropdown__cuisine-checkbox" 
                       id={this.props.tag.id} ref={this.checkbox} onChange={this.selectTag} /> */}
                <label className={`filter-dropdown__cuisine-name ${selectedClass}`} htmlFor={this.props.tag.id}>{this.props.tag.name}</label>
            </li>
        );
    }
}

export default Tag;