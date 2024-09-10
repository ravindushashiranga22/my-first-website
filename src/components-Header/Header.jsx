import React from 'react';
import logo from '../assets/logo.png';
import {links} from '../Data';
import {FaStream} from 'react-icons/fa';
import './header.css';

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
          <a href="/" className="nav__logo"></a>
            <img src={logo} className="nav__logo-img"></img>
            <div className="nav__menu">
              <ul className="nav__list">
                  {links.map(({name, path}, index) => {
                    return(
                      <li className="nav__item" key={index}>
                        <a href={path} className="nav__link">{name}</a>
                      </li> 
                    );
                  })}
              </ul>
            </div>
            <div classNAme="nav__toggle">
              <FaStream/>
            </div>
        </nav>
          
      
    </header>
  );
}

export default Header;
