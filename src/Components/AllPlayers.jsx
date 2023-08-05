/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers({ APIURL }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        setPlayers(result.data.players);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchAllPlayers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>List of Players</h1>
      {players.map((player) => (
        <div className="PlayerCard" key={player.id}>
          <p>{player.name}</p>
          <button onClick={() => navigate(`/players/${player.id}`)}>Details</button>
        </div>
      ))}
    </div>
  );
  
}