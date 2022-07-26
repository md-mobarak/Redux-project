import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user_2.png'
import './Header.scss'
const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>Movie app</div>
            </Link>
            <div className='user-image'>
                <img src={user} alt="" />
            </div>
        </div>
    );
};

export default Header;