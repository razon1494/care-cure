import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar'
import HeaderTop from '../HeaderTop/HeaderTop'
const Header = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;