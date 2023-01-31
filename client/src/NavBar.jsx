import React from 'react';
import '../public/styles/navBar.scss';
import raccoon from '../public/images/raccoon.png';
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const { logout } = useAuth0();

  return (
    <div className='navBarContainer'>
      <div className='left'>
        <a href='/'><img src={raccoon} alt='logo' id='logo'></img></a>
      </div>
      <div className='spacer'></div>
      <div className="right">
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      LOG OUT
    </button>
      </div>
    </div>
  );
}
