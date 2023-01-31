import React from 'react';
import '../public/styles/post.scss';

export default function Post({posts}) {
  console.log('all posts', posts)
  return (
    <>
    {posts.map((post) => {
      console.log('each post', post)
      const {
        email,
        first_name,
        item_description,
        item_lost,
        last_name,
        location,
        _id,
      } = post
      return (
        <div className='postWrapper' key={_id}>
          Full Name: {(first_name, last_name)} <br />
          Item Lost: {item_lost} <br />
          Location: {location} <br />
          Item Description: {item_description} <br />
          Contact: {email}
        </div>
      )
    })}
    </>
  );
}
