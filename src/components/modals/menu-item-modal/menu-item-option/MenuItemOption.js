import React from 'react';

import SingleSelecion from './selection/single-selection/SingleSelection';
import MultipleSelection from './selection/multiple-selection/MultipleSelection';

class MenuItemOption extends React.Component {
    constructor(props) {
        super(props);

        this.onOptionSelection = this.onOptionSelection.bind(this);
    }

    onOptionSelection(selection) {
        const optionSelection = {
            optionId: this.props.option.id,
            selection
        };

        this.props.updateOptionSelection(optionSelection);
    }

    render() {
        const option = this.props.option;

        const validationMsg = (option.type == "Required")
                                ? "Required, choose at least one."
                                : "Optional, choose multiple.";

        const validationClass = option.type == "Required" ? "required" : "optional";


        return (
            <article className="dish-options" data-id={option.id} data-type={option.type}>
                <div className="dish-options__head">
                    <h4 className="dish-options__title">{option.name}</h4>
                    <span className="dish-options__icon dish-options__icon--arrow-up"><i className="fa fa-chevron-up"></i></span>
                    <span className="dish-options__icon dish-options__icon--arrow-down"><i className="fa fa-chevron-down"></i></span>
                </div>

                <p className={`validation-info validation-info--${validationClass}`}>{validationMsg}</p>

                {
                    (option.type === "Required")
                        ? <SingleSelecion optionItems={option.optionItems} optionId={option.id} onOptionSelection={this.onOptionSelection} />
                        : <MultipleSelection optionItems={option.optionItems} optionId={option.id} onOptionSelection={this.onOptionSelection} />
                }
            </article>
        );
    }
}

export default MenuItemOption;