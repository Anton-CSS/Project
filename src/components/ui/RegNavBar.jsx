import React from 'react';

const RegNavBar = ({user}) => {
    
    return (
        <nav className="nav">
            <a className="nav__link" href="/"> {user?.name}</a>
            <a className="nav__link" href="/"> Главная</a>
            <a className="nav__link" href="/auth/logout" >Выйти</a>
         
        </nav>
    );
};

export default RegNavBar;
