import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assests/logo.png'; // Correction de l'orthographe de 'assets'

const data = [
  { label: 'HOME', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Resume', to: '/resume' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' }
];

function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeMenu = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__container'>
          <Link to="/" className='navbar__container__logo' onClick={closeMenu}>
            <img src={logo} alt='logo'  height='130'/> {/* Correction de la balise img */}
            <p> samah layouni </p>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className='navbar__container__menu__item'>
              <Link
                className='navbar__container__menu__item__links'
                to={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='nav-icon' onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
