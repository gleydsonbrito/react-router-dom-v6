import React from 'react';
import './header.css'

import logo from './assets/logo.jpeg'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()

  function handleGoHome(){
    navigate('/')
  }
  return ( 
    <div className="header-container">
      <div className='logo' onClick={handleGoHome}>
        <img src={logo} width='100%' height='100%' alt='logo'/>
      </div>
      <nav className='menu'>
        <a className='nav-item' href="www.github.com" >Promoções</a>
        <a className='nav-item' href="www.github.com" >Contato</a>
        <a className='nav-item' href="www.github.com" >Sobre</a>
      </nav>
    </div>
   );
}

export default Header;