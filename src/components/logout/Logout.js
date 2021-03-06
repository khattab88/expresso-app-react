import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import { logout } from '../../store/actions';

class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return (<Redirect to="/" />);
    }

}

const mapStateToProps = state => {
    return { auth: state.auth }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);