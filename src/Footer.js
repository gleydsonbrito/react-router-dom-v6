import React from 'react';
import './footer.css'

import avatar from './assets/avatar.png'

function Footer() {
  return ( 
    <div className="footer">
      <h3>Produzido para aula de React Navigation - ETE Cícero Dias - Módulo III - Prof. Gleydson Brito</h3>
      <div className='avatar'>
        <a href='https://github.com/gleydsonbrito'>
          <img src={avatar} alt='avatar' width='100%' height='100%'/>
        </a>
      </div>
    </div>
   );
}

export default Footer;