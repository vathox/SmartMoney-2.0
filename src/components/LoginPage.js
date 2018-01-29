import React from 'react'
import {connect} from 'react-redux'
import {startLogIn} from '../actions/auth'

const LoginPage = ({startLogIn}) =>(
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">SmartMoney 2.0</h1>
            <p>Take your expenses under control with smart solutions</p>
            <button className="button" onClick={startLogIn}>Log in with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) =>({
    startLogIn : () => dispatch(startLogIn())
});

export default connect(undefined, mapDispatchToProps)(LoginPage)
