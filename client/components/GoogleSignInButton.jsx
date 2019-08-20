import React, { Component } from 'react';

class GoogleSignInButton extends Component {


    render(){
        return (
        <div>
            <div className="g-signin2" data-onsuccess="onSignIn" ></div>
        </div>
        )
    }
}

export default GoogleSignInButton;