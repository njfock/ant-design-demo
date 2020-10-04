import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <Link to="/"      style ={{margin:5}}>main </Link>
            <Link to="/home"  style ={{margin:5}}>home </Link>
            <Link to="/about" style ={{margin:5}}>about</Link>
            <Link to="/users" style ={{margin:5}}>Users</Link>
            <Link to="/counter" style ={{margin:5}}>Counter</Link>
        </>
    );
}

export default NavBar;