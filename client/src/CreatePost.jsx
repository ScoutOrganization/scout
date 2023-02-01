import React, { useState } from 'react';
import '../public/styles/CreatePost.scss';
import post from '../public/images/post.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const CreatePost =  () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [itemName, setItemName] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const history = useHistory();


  const submitForm = async () => {
    const requestBody = {
      email: user.email,
      first_name: firstName,
      last_name: lastName,
      item_lost: itemName,
      location,
      item_description: details,
    };
    
    const sendPost = async () => {
      try {
        await axios.post('http://localhost:3000/createPost', requestBody); 
      } catch (err) {
        console.log('unsuccessful post');
      }
    }
    sendPost();

    setFirstName('');
    setLastName('');
    setItemName('');
    setLocation('');
    setDetails('');
    history.push('/bulletin')
  };
  if (user) {
    return (
      <div className='postContainer'>
        <div className='photo'>
          <img id='board' src={post}></img>
        </div>
        <div className='post'>
          <h1>Create a Post</h1>
          <br />
          <label className='label' htmlFor='first'>
            FIRST NAME
          </label>
          <br />
          <textarea
            id='first'
            className='input'
            onInput={(e) => {
              setFirstName(e.currentTarget.value);
            }}
            value={firstName}
            placeholder={user.given_name}
          ></textarea>
          <br />
          <label className='label' htmlFor='last'>
            LAST NAME
          </label>
          <br />
          <textarea
            id='last'
            className='input'
            onInput={(e) => {
              setLastName(e.currentTarget.value);
            }}
            value={lastName}
            placeholder={user.family_name}
          ></textarea>
          <br />
          <label className='label' htmlFor='location'>
            LOCATION
          </label>
          <br />
          <textarea
            id='location'
            className='input'
            onInput={(e) => {
              setLocation(e.currentTarget.value);
            }}
            value={location}
          ></textarea>
          <br />
          <label className='label' htmlFor='item'>
            ITEM LOST
          </label>
          <br />
          <textarea
            id='item'
            className='input'
            onInput={(e) => {
              setItemName(e.currentTarget.value);
            }}
            value={itemName}
          ></textarea>
          <br />
          <label className='label' htmlFor='details'>
            ADDITIONAL INFORMATION
          </label>
          <br />
          <textarea
            id='details'
            onInput={(e) => {
              setDetails(e.currentTarget.value);
            }}
            value={details}
          ></textarea>
          <br />
          <button id='button' onClick={submitForm}>
            POST
          </button>
        </div>
      </div>
    );
  }
};

export default CreatePost;
