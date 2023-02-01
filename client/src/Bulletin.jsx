import React, { useEffect, useState } from 'react';
import '../public/styles/bulletin.scss';
import NavBar from './NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import Post from './Post';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Bulletin() {
  const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const [location, setLocation] = useState('');
  const [posts, setPosts] = useState([]); 
  const history = useHistory(); 

  function handleFormSubmit(event) {
    event.preventDefault();
    setLocation(event.target[0].value);
  }

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get('http://localhost:3000/bulletin');
        setPosts([...response.data]); 
      } catch (err) {
        console.log('no posts recieved');
      }
    }
    getPosts(); 
  }, []); 

  return (
    <div className='bulletinContainer'>
      <NavBar />
      <h1>Bulletin Board</h1>
      <div className='bulletinWrapper'>
        <div className='locationWrapper'>
          <form onSubmit={handleFormSubmit}>
            <label id='locationLabel'>LOCATION</label>
            <br />
            <input id='locationInput' type='text'></input>
            <br />
            <button className='bulletinBtn' type='submit' role='button'>
              Filter
            </button>
          </form>
          <div id='createPostContainer'> 
            <button className='bulletinBtn' type='button' onClick={() => {history.push('/createPost')}}>CREATE POST </button>
          </div>
        </div>
        <div className='allPostsContainer'>
          <Post posts={posts} />
        </div>
      </div>
    </div>
  );
}
