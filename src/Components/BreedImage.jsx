/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";


// Import the specific breed image and the generic image from the assets folder
import poodleImage from "../assets/Images/poodle-1.jpeg";
import genericImage from "../assets/Images/great-pyrenees.jpeg";

const BreedImage = ({ breed }) => {
  // Check if breed is "poodle" and use the specific poodle image,
  // otherwise, use the generic image for anything else (including blank entry)
  const imageUrl = breed.toLowerCase() === "poodle" ? poodleImage : genericImage;

  return <img src={imageUrl} alt={`Image of a ${breed}`} />;
};


export default BreedImage;