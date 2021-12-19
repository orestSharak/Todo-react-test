import React from 'react';
import Logo from '../images/logo.svg';
import Avatar from '../images/avatar.png';
import Chevron from '../images/chevron-down.svg';

function Header() {
  return (
    <header className='header'>
      <div className='logo-block'>
        <img className='logo-block_image' src={Logo} alt='logo'/>
        <span className='logo-block_title'>To-Do</span>
      </div>
      <div className='header_container'>
        <span className='header_title'>Tasks</span>
        <div className='avatar-block'>
          <span className='avatar-block_name'>Leanne Graham</span>
          <img className='avatar-block_img' src={Avatar} alt='avatar'/>
          <img className='avatar-block_chevron' src={Chevron} alt='chevron'/>
        </div>

      </div>
    </header>

  );
}

export default Header;