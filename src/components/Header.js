import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <div>
        <h1>Smart Money 2.0</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add new expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
);

export default Header