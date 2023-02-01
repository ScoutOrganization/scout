import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../public/styles/profile.scss';
import UserPosts from './UserPosts';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const history = useHistory();
  const { user } = useAuth0();
  const [userPosts, setUserPosts] = useState([]);
  const [userPicture, setUserPicture] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function getUserPosts() {
      try {
        if (user) {
          setUserPicture(user.picture);
          setNickname(user.nickname);
          setEmail(user.email);
          const response = await axios.get(
            'http://localhost:3000/userPosts?email=' + user.email
          );
          setUserPosts([...response.data]);
        }
      } catch (err) {
        console.log('user has no posts');
      }
    }
    getUserPosts();
  }, [user, userPosts]);

  return (
    <div className='profileContainer'>
      <NavBar />
      <h1>User Profile</h1>
      <div className='profileWrapper'>
        <div className='profile-left'>
          <img src={userPicture} />
          <div id='userNickname'>Name: {nickname}</div>
          <div id='userEmail'>Email: {email}</div>
          <button
            className='profileBtns'
            type='button'
            onClick={() => {
              history.push('/createPost');
            }}
          >
            CREATE POST
          </button>
          <button
            className='profileBtns'
            type='button'
            onClick={() => {
              history.push('/bulletin');
            }}
          >
            BULLETIN BOARD
          </button>
        </div>
        <div className='profile-right'>
          <UserPosts userPosts={userPosts} />
        </div>
      </div>
    </div>
  );
}
