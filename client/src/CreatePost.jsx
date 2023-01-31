import React, { useState } from 'react';

const CreatePost = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [itemName, setItemName] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');

	const submitForm = () =>{
		const requestBody = {
			firstName,
			lastName,
			itemName,
			location,
			details
		};
		console.log(requestBody)

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
	}
  return (
    <div class="post">
      <label for="first">First Name:</label>
      <input
        id="first"
        onInput={(e) => {
          setFirstName(e.currentTarget.value);
        }}
        value={firstName}
      ></input>
      <br />
      <label for="last">Last Name:</label>
      <input
        id="last"
        onInput={(e) => {
          setLastName(e.currentTarget.value);
        }}
        value={lastName}
      ></input>
      <br />
      <label for="location">Location:</label>
      <input
        id="location"
        onInput={(e) => {
          setLocation(e.currentTarget.value);
        }}
        value={location}
      ></input>
      <br />
      <label for="item">Item lost:</label>
      <input
        id="item"
        onInput={(e) => {
          setItemName(e.currentTarget.value);
        }}
        value={itemName}
      ></input>
      <br />
      <label for="details">Additional details:</label>
      <input 
				id="detials" 
				onInput={(e)=>{
					setDetails(e.currentTarget.value);
				}}
				value={details}>
			</input>
			<br/>
			<input 
			type='submit'
			onClick={submitForm}
			/>
    </div>
  );
};
export default CreatePost;
