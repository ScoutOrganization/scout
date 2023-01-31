import React from 'react';
import '../public/styles/landing.scss';
import sunglasses from '../public/images/sunglasses.jpg';

export default function Landing() {
  return (
    <div className='landingContainer'>
      <div className='right'>
      <img id='sunglasses' alt='sunglasses' src={sunglasses}></img>
      </div>

      <div className='left'>
        <h3>WELCOME TO</h3>
        <h1>Scout</h1>
        <h3>Welcome to Scout, the community-driven platform that helps reunite people with their lost belongings. Our mission is to make it easier for individuals to recover lost items through the power of community. Whether you've lost your keys, wallet, phone, or any other important item, our platform allows users to report lost items by creating a post, which can be viewed by members of our community. With a network of people working together, we increase the chances of finding lost items and bringing them back to their rightful owners. Join us in our mission to make the world a little less lost.</h3>
        <br />  <br />
        <button class='startBtn'>GET STARTED</button>
      </div>
    </div>
  );
}

