/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreedImage from "./BreedImage";

export default function NewPlayerForm({ APIURL }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [teamId, setTeamId] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const newPlayer = { name, breed, status, imageUrl, teamId };

    if (status !== "bench" && status !== "field") {
      delete newPlayer.status;
    }
    if (imageUrl === "") {
      delete newPlayer.imageUrl;
    }
    if (teamId === "") {
      delete newPlayer.teamId;
    }

    console.log(newPlayer);
    try {
      const response = await fetch(`${APIURL}players/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          placeholder="required"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Breed:
        <input
          type="text"
          placeholder="required"
          value={breed}
          onChange={handleBreedChange}
          required
        />
      </label>
      
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="bench">bench</option>
          <option value="field">field</option>
        </select>
      </label>
     
      <label>
        TeamId:
        <input
          type="number"
          placeholder="optional"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
        />
      </label>

      <button type="submit" onClick={() => navigate(-1)}>
        Submit
      </button>

      <BreedImage breed={breed} /> {/* Use the BreedImage component */}
      
    </form>
  );
}