import React from 'react';

class Toaster extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const className = this.props.visible ? "toast-message toast-message--visible" : "toast-message";

        return (
            <div className={className}>
                <p className="toast-message__message">Item added to cart</p>
                <span className="material-icons toast-message__close" onClick={this.props.toggleToaster}>close</span>
            </div>
        );
    }
}

export default Toaster;