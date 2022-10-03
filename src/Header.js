import React from 'react';
import './header.css'

import logo from './assets/logo.jpeg'
import { useNavigate } from 'react-router-dom';

import avatar from './assets/avatar.png'

function Header() {
  const navigate = useNavigate()

  function handleGoHome(){
    navigate('/')
  }

  const url = "https://github.com/gleydsonbrito/react-router-dom-v6"
  return ( 
    <div className="header-container">
      <div className='logo' onClick={handleGoHome}>
        <img src={logo} width='100%' height='100%' alt='logo'/>
      </div>
      <nav className='menu'>
        <a className='nav-item' href={url} target='_blank' rel='noreferrer'>Promoções</a>
        <a className='nav-item' href={url} target='_blank' rel='noreferrer'>Contato</a>
        <a className='nav-item' href={url} target='_blank' rel='noreferrer'>Sobre</a>
        <div className='avatar'>
          <a href={url} target='_blank' rel='noreferrer'>
            <img src={avatar} alt='avatar' width='100%' height='100%'/>
          </a>
        </div>
      </nav>
    </div>
   );
}

export default Header;