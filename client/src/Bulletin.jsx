import React, { useEffect, useState } from 'react';
import '../public/styles/bulletin.scss';
import NavBar from './NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import Post from './Post';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Bulletin() {
  const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  let location;

  function handleFormSubmit(event) {
    event.preventDefault();
    location = event.target[0].value;
    filterPosts();
  }

  async function getPosts() {
    try {
      const response = await axios.get('http://localhost:3000/bulletin');
      console.log('response', response)
      setPosts([...response.data.reverse()]);
    } catch (err) {
      console.log('no posts recieved');
    }
  }

  useEffect(() => {
    getPosts();
  }, [posts]);

  async function filterPosts() {
    try {
      const response = await axios.get(
        `http://localhost:3000/filter?location=${location}`
      );
      setPosts([...response.data.reverse()]);
    } catch (err) {
      console.log('no posts recieved');
    }
  }

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
            <div className='bulletinDuoBtn'>
              <button className='bulletinBtn' type='submit' role='button'>
                Filter
              </button>
              <button
                className='bulletinBtn'
                type='button'
                onClick={() => {
                  getPosts();
                }}
              >
                REFRESH
              </button>
            </div>
          </form>
          <div id='createPostContainer'>
            <button
              className='bulletinBtn'
              type='button'
              onClick={() => {
                history.push('/createPost');
              }}
            >
              CREATE POST
            </button>
          </div>
        </div>
        <div className='allPostsContainer'>
          <Post posts={posts} />
        </div>
      </div>
    </div>
  );
}
