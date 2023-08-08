/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './NavBar.css'
import './All-Players.css'
import './AddPlayerForm.css'
import './Home.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import AllPlayers from './Components/AllPlayers'
import NavBar from './Components/NavBar'
import SinglePlayer from './Components/SinglePlayer'
import NewPlayerForm from './Components/NewPlayerForm'
import BreedImage from './Components/BreedImage'



export default function App() {
  const cohortName = '2302-ACC-PT-WEB-PT-A';
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

  return (
    <>
     <NavBar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/players" element={<AllPlayers APIURL={APIURL} />} />
        <Route path="/players/:id" element={<SinglePlayer APIURL={APIURL} />} />
        <Route path="/newPlayer" element={<NewPlayerForm APIURL={APIURL} />} />
      </Routes>
    </>
  )
}