import React from 'react';
import '../public/styles/bulletin.scss';
import NavBar from './NavBar';

export default function Bulletin() {
  // bulletin board will hold all the posts
  // posts will be rendered to the screen
  // set interval to grab the latest data

  return (
    <div className='container'>
      <NavBar />
      <h1>Bulletin Board</h1>
      <div className='bulletinContainer'>
        <div className='locationWrapper'>Location</div>
        <div className='postContainer'>
          <div className='postWrapper'>Posts will go here</div>
        </div>
      </div>
    </div>
  );
}
