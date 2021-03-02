import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.props.onInputChange(e.target.value);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onSearch();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input style={{ width: '100%', height: '3rem', fontSize: '1.5rem'}} name='search' value={this.props.term} onChange={this.onChange} />
            </form>
        );
    }
}

export default Input;