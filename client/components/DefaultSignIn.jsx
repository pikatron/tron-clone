import React, { Component } from 'react';

const DefaultSignIn = (props) => {
    return (
        <div>
            <form onSubmit={ (e) => props.handleSubmit(e) }>
                    <label>Username: </label>
                    <input type='username' name='username' ></input>
                        <br />
                        <br />
                    <label>Password: </label>
                    <input type='password' name='password' ></input>
                <div>        
                    <button name='LogIn' onClick={ (e) => props.buttonClicked(e) } >Log In</button>
                    <button name='SignUp' onClick={ (e) => props.buttonClicked(e) } >Sign Up</button>
                </div>
            </form>
        </div>
    )
    

}

export default DefaultSignIn;