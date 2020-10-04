import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <Link to="/">main</Link>
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
        </>
    );
}

export default NavBar;