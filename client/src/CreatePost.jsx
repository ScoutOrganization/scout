import React, { useState } from 'react';
import '../public/styles/CreatePost.scss';
import post from '../public/images/post.jpg';


const CreatePost = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [itemName, setItemName] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');

  const submitForm = () => {
    const requestBody = {
      firstName,
      lastName,
      itemName,
      location,
      details,
    };
    console.log(requestBody);

    // fetch('http://localhost:8080/api/login', {
    // 	headers: {
    // 		Accept: 'application/json',
    // 		'Content-Type': 'application/json',
    // 	},
    // 	method: 'POST',
    // 	mode: 'cors',
    // 	body: JSON.stringify(requestBody),
    // })
    // 	.then((data) => data.json())
    // 	.then((data) => {
    // 		console.log(data);
    // 	})
    // 	.catch((err) => {
    // 		console.error('err', err);
    // 	});

    setFirstName('');
    setLastName('');
    setItemName('');
    setLocation('');
    setDetails('');
  };

  return (
    <div className="container">
      <div className="photo">
        <img id="board" src={post}></img>
      </div>
      <div className="post">
      <h1>Create a Post</h1>
      < br />
        <label className="label" htmlFor="first">
          FIRST NAME
        </label>
				<br/>
        <textarea
          id="first"
          className="input"
          onInput={(e) => {
            setFirstName(e.currentTarget.value);
          }}
          value={firstName}
        ></textarea>
        <br />
        <label className="label" htmlFor="last">
          LAST NAME 
        </label>
				<br/>
        <textarea
          id="last"
          className="input"
          onInput={(e) => {
            setLastName(e.currentTarget.value);
          }}
          value={lastName}
        ></textarea>
        <br />
        <label className="label" htmlFor="location">
          LOCATION 
        </label>
				<br/>
        <textarea
          id="location"
          className="input"
          onInput={(e) => {
            setLocation(e.currentTarget.value);
          }}
          value={location}
        ></textarea>
        <br />
        <label className="label" htmlFor="item">
          ITEM LOST 
        </label>
				<br/>
        <textarea
          id="item"
          className="input"
          onInput={(e) => {
            setItemName(e.currentTarget.value);
          }}
          value={itemName}
        ></textarea>
        <br />
        <label className="label" htmlFor="details">
          ADDITIONAL INFORMATION 
        </label>
				<br/>
        <textarea
          id="details"
          onInput={(e) => {
            setDetails(e.currentTarget.value);
          }}
          value={details}
        ></textarea>
        <br />
        <button id="button"  onClick={submitForm}>POST</button>
      </div>
    </div>
  );
};

export default CreatePost;
