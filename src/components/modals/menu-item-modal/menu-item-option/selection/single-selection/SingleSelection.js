import React from 'react';

class SingleSelecion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selection: ""
        };

        this.renderOptionDetail = this.renderOptionDetail.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        // const optionId = e.target.name.split('-')[1];

        //console.log(e.target);

        const selectedOptionItem = e.target.value.replace("optitem-", "");

        this.setState({
            selection: selectedOptionItem
        }, 
        () => this.props.onOptionSelection(this.state.selection));
    }

    renderOptionDetail(optionDetail) {
        return (
            <li className="dish-option" key={optionDetail.id}>
                <div className="dish-option__detail">
                    <input className="dish-option__input-checkbox" type="radio" 
                           name={`opt-${this.props.optionId}`} id={`optitem-${optionDetail.id}`}
                           value={`optitem-${optionDetail.id}`}  />
                    <label className="dish-option__name" htmlFor={`optitem-${optionDetail.id}`}>{optionDetail.name}</label>
                </div>
                <p className="dish-option__price">
                    <span>{optionDetail.value}</span>.00 EGP
                </p>
            </li>
        );
    }

    render() {
        const optionDetailList = this.props.optionItems.map((detail) => this.renderOptionDetail(detail));

        return (
            <ul className="dish-options__body dish-options__sigle-selection" onChange={this.onChange}>
                {optionDetailList}
            </ul>
        );
    }
}

export default SingleSelecion;