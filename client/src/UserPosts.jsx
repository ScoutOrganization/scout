import React, { useState, useEffect } from 'react';
import '../public/styles/userPosts.scss';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import axios from 'axios';
import EdiText from 'react-editext';

// import { useAuth0 } from '@auth0/auth0-react';

export default function UserPosts({ userPosts }) {
  async function handleDeletePost(postID) {
    await axios.delete('http://localhost:3000/userPosts', {
      data: { postID: postID },
    });
  }

  async function updateDescription(val) {
    await axios.post('http://localhost:3000/userPosts', {
      data: { item_description: val },
    });
  }

  return (
    <>
      {userPosts.map((post) => {
        const {
          email,
          first_name,
          item_description,
          item_lost,
          last_name,
          location,
          _id,
        } = post;
        return (
          <div className='userPostWrapper' key={_id}>
            Full Name: {first_name + ' ' + last_name} <br />
            Contact: {email} <br />
            Location: {location} <br />
            Item Lost: {item_lost} <br />
            Item Description:
            <EdiText
              type='text'
              value={item_description}
              onSave={updateDescription}
            />
            <br />
            <div className='buttonContainer'>
              <button
                id='foundBtn'
                onClick={() => {
                  handleDeletePost(_id);
                }}
              >
                ITEM FOUND
                <RiDeleteBin5Fill size={30} color={'#313614'} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
