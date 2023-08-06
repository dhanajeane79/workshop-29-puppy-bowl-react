/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreedImage from "./BreedImage";

export default function NewPlayerForm({ APIURL }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
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
    const selectedBreed = event.target.value;
    setBreed(selectedBreed);

    // Get the corresponding image URL for the selected breed
    const breedImages = {
      poodle:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Firework_EWF_0020.jpg.rend.hgtvcom.966.966.suffix/1641529012269.jpeg", // URL for poodle image
      pug: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Baxter_EWF_1192.jpg.rend.hgtvcom.966.966.suffix/1641528997011.jpeg", // URL for chihuahua image
      chihuahua:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Marcus_EWF_9959.jpg.rend.hgtvcom.966.966.suffix/1641529024557.jpeg",
      dachshund:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Hera_EWF_0113.jpg.rend.hgtvcom.966.966.suffix/1641529015963.jpeg",
      chow: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Glaze_EWF_1004.jpg.rend.hgtvcom.966.966.suffix/1641529014704.jpeg",
      mastiff:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Forrest_EWF_2250.jpg.rend.hgtvcom.966.966.suffix/1641529012824.jpeg",
      pomeranian:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20ChubbyBear_EWF_0689.jpg.rend.hgtvcom.966.966.suffix/1641529006144.jpeg",
      beagle:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Brooke_EWF_1863.jpg.rend.hgtvcom.966.966.suffix/1641529002370.jpeg",
      maltese:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Biff_EWF_9764.jpg.rend.hgtvcom.966.966.suffix/1641528998235.jpeg",
      pit: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Banjo_EWF_2864.jpg.rend.hgtvcom.966.966.suffix/1641528996495.jpeg",
      bigPoodle: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Benny_EWF_2805.jpg.rend.hgtvcom.966.966.suffix/1641528997533.jpeg",
      staffordshire: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/meet-the-players/headshots/Copy%20of%20Billie_EWF_1116.jpg.rend.hgtvcom.966.966.suffix/1641528998854.jpeg",



    };
    setImageUrl(breedImages[selectedBreed.toLowerCase()] || "");
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
        <select value={breed} onChange={handleBreedChange} required>
          <option value="">Select Breed</option>
          <option value="poodle">Small Poodle</option>
          <option value="pug">Pug</option>
          <option value="chihuahua">Chihuahua</option>
          <option value="dachshund">Dachshund</option>
          <option value="chow">Chow Chow</option>
          <option value="mastiff">Mastiff</option>
          <option value="pomeranian">Pomeranian</option>
          <option value="beagle">Beagle</option>
          <option value="maltese">Maltese</option>
          <option value="pit">Pit Bull</option>
          <option value="bigPoodle">Big Poodle</option>
          <option value="staffordshire">American Staffordshire Terrier</option>
          <option value="pug">Pug</option>

          {/* Add more breed options here */}
        </select>
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
      <label>
        Image URL:
        <input
          type="text"
          placeholder="Auto-populated URL for selected breed"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          readOnly
        />
      </label>
    </form>
  );
}
