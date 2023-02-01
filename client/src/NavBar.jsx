import React, { useEffect, useState } from 'react';
import '../public/styles/navBar.scss';
import raccoon from '../public/images/raccoon.png';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri';

export default function NavBar() {
  const { user, isAuthenticated, logout, loginWithRedirect, isLoading } =
    useAuth0();
  const [userPhoto, setUserPhoto] = useState();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      setUserPhoto(user.picture);
    }
  }, [user]);

  return (
    <div className='navBarContainer'>
      <div className='left'>
        <a href='/'>
          <img src={raccoon} alt='logo' id='logo'></img>
        </a>
      </div>
      <div className='spacer'></div>
      <div className='right'>
        <button
          id='logout'
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          <RiLogoutBoxLine size={35} />
        </button>
        <button id='profileBtn' onClick={() => history.push('/profile')}>
          <img id='userPhoto' src={userPhoto} />{' '}
        </button>
      </div>
    </div>
  );
}
