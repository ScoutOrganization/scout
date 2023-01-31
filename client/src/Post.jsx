import React from 'react';
import '../public/styles/post.scss';
import axios from 'axios';

export default function Post() {

  let response = ''; 
  async function getPosts() {
    try {
      response = await axios.get('http://localhost:3000/bulletin');
    } catch (err) {
      console.log('no posts recieved');
    }
  }

  return (
    <>
    {response.map((post) => {
      ({
        email,
        first_name,
        last_name,
        item_lost,
        item_description,
        location,
        _id,
      } = post);
      return (
        <div className='postContainer'>
        <div className='postWrapper' key={_id}>
          <p>Hi I'm a post</p>
          Full Name: {(first_Name, last_Name)} <br />
          Item Lost: {item_lost} <br />
          Location: {location} <br />
          Item Description: {item_description} <br />
        </div>
      </div>
      )
    })}
    </>
  );
}
