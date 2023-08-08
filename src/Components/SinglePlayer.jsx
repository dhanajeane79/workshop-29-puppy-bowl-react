/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import BreedImage from "./BreedImage";


export default function SinglePlayer({ APIURL }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    

    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                const response = await fetch(`${APIURL}players/${id}`);
                const result = await response.json();
                setPlayer(result.data.player);
                console.log(player);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSinglePlayer();
    }, [])

    

    if (player) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className= "single-Card">
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>{player.name}</h1>

                <div >
                        <BreedImage breed={player.breed} />
                    </div>
                <p><strong>ID:</strong> {player.id}</p>
                <p><strong>Breed:</strong> {player.breed}</p>
                <p><strong>Status:</strong> {player.status}</p>
                <p><strong>Created at:</strong> {player.createdAt}</p>
                <p><strong>Updated at:</strong> {player.updatedAt}</p>
                <p><strong>Team ID:</strong> {player.teamId}</p>
                <p><strong>Cohort ID:</strong> {player.cohortId}</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className= "close-button" onClick={() => navigate('/players')}>Close</button>
                {console.log(id)}
                </div>
                </div>
            </div>
        )
    } else {
        return null;
    } 
}