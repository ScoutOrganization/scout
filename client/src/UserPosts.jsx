import React from 'react';
import '../public/styles/userPosts.scss';
import {RiDeleteBin5Fill} from 'react-icons/ri'


export default function UserPosts({userPosts}) {
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
      } = post
      return (
        <div className='userPostWrapper' key={_id}>
          Full Name: {(first_name, last_name)} <br />
          Item Lost: {item_lost} <br />
          Location: {location} <br />
          Item Description: {item_description} <br />
          Contact: {email} <br />
          <RiDeleteBin5Fill size={30} color={'#313614'} />
        </div>
      )
    })}
    </>
  );
}
