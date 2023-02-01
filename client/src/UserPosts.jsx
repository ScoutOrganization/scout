import React, { useState, useEffect } from 'react';
import '../public/styles/userPosts.scss';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';

export default function UserPosts({ userPosts }) {
  // changing the text in the button
  const [toggleButton, setToggleButton] = useState('EDIT');
  // noting when in edit mode
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState();

  async function handleDeletePost(postID) {
    await axios.delete('http://localhost:3000/userPosts', {
      data: { postID: postID },
    });
  }

  async function editButton(postId) {
    if (toggleButton === 'EDIT') {
      setToggleButton('SAVE');
      // put the item description in a form as a placeholder.
      userPosts.forEach((element) => {
        if (Object.values(element).includes(postId)) {
          console.log('description in state: ', element.item_description);
          return setDescription(element.item_description);
        }
      });
    } else {
      setToggleButton('EDIT');
      // send off an axios post to backend with new data.
    }
  }

  useEffect(() => {}, []);

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
            Item Description: {item_description} <br />
            <div className='buttonContainer'>
              <button
                id='foundBtn'
                onClick={() => {
                  editButton(_id);
                }}
              >
                {toggleButton}
              </button>
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
