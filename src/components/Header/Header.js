import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, logout} = useAuth();

    return (
        <nav>
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/shipping' className='nav-link'>Shipping</NavLink>
            <NavLink to='/gallery' className='nav-link'>Gallery</NavLink>
            <NavLink to='/register' className='nav-link'>Register</NavLink>
            <NavLink to='/login' className='nav-link'>Login</NavLink>
            {user?.displayName && <button onClick={logout}>Log Out</button>}
            <span className='displayName'>{user.displayName}</span>
            <span ><img src={user.photoURL} width='30px'  alt="" /></span>
        </nav>
    );
};

export default Header;