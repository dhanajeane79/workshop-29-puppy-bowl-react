/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import puppyImage from '../assets/Images/pups-with-helmets.jpg'; // Import the saved image
import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className= "welcome-header">Welcome to Puppy Bowl 2023</h1>
      <p className= "welcome-paragraph">
      Welcome to the Puppy Bowl 2023, the cutest sporting event of the year! 
      Get ready for a paw-some display of puppy athleticism, where fur and fluff 
      collide in an epic battle for the title of the Most Adorable Athlete.
      The halftime show promises to be an absolute treat, featuring the world-famous 
      Puppy Marching Band and their adorable rendition of "Who Let the Dogs Out."
      Puppy Bowl 2023 is an event you won't want to miss, where the stakes are high, 
      the fur is fluffy, and the "awwws" are in abundance. 
      Get ready for a barking good time!
      </p>
      <div className= "meet-and-pic">
      <p className="meet-puppers">
        Click below to meet the Puppers! 
      </p>
      <Link to="/players"> 
        <img
          src={puppyImage} // Use the imported image as the src attribute
          alt="Puppy Bowl"
          style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer', border: '2px solid #ccc',  }}
        />
      </Link> 
      </div>
      <div className= "roster-and-button">
      <p className= "add-a-pup">
        Do you have a Doggo to add to the Roster?
      </p>
      <Link to="/newPlayer" style={{ textDecoration: 'none' }}>
        <button className="click-here-button">Click Here</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;