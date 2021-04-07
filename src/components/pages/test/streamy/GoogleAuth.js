import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from './store/actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "281778303919-19st3rlqa52cqfeaikiv285gkebf26er.apps.googleusercontent.com",
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());

                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            const userId = this.auth.currentUser.get().getId();
            this.props.signIn(userId);
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } 
        else if(this.props.isSignedIn) {
            return(
                <button className="auth__btn" onClick={this.onSignOutClick}>Sign Out with Google</button>
            );
        }
        else {
            return(
                <button className="auth__btn" onClick={this.onSignInClick}>Sign In with Google</button>
            );
        } 
    }

    render() {
        return (
            <div className="auth">{this.renderAuthButton()}</div>
        );  
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);