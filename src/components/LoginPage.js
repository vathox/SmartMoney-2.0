import React from 'react'
import {connect} from 'react-redux'
import {startLogIn} from '../actions/auth'

const LoginPage = ({startLogIn}) =>(
    <div>
        <h1>Welcome! Please log in</h1>
        <button onClick={startLogIn}>Log in!</button>
    </div>
);

const mapDispatchToProps = (dispatch) =>({
    startLogIn : () => dispatch(startLogIn())
});

export default connect(undefined, mapDispatchToProps)(LoginPage)
