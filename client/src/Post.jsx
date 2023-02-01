import React from 'react';
import '../public/styles/post.scss';

export default function Post({posts}) {
  return (
    <>
    {posts.map((post) => {
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
          Full Name: {(first_name + ' ' + last_name)} <br />
          Contact: {email}<br />
          Location: {location} <br />
          Item Lost: {item_lost} <br />
          Additional Details: {item_description} <br />
        </div>
      )
    })}
    </>
  );
}
