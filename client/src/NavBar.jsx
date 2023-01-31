import React from 'react';
import '../public/styles/navBar.scss';
import logo from '../public/images/logo.png';

export default function NavBar() {
  return (
    <div className='navBarContainer'>
      <div className='left'>
        <img src={logo} alt='logo' id='logo'></img>
      </div>
      <div className='spacer'></div>
      {/* <div className="right"></div> */}
    </div>
  );
}
