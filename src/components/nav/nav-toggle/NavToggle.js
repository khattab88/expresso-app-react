import React from 'react';

class NavToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false
        };
    }
    
    render() {
        return(
            <div className="navbar__toggle" onClick={this.props.toggleMobileNav}>
                    <span className="navbar__toggle-icon fa fa-align-justify"></span>
            </div>
        );
    }
}

export default NavToggle;