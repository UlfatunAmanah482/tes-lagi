import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import CreatePage from './pages/CreatePage'
import PlayersPage from './pages/PlayersPage'
import EditPage from './pages/EditPage'
import SearchUsername from './pages/SearchUsername'
import SearchEmail from './pages/SearchEmail'
import SearchExperience from './pages/SearchExperience'
import SearchLevel from './pages/SearchLevel'

function App() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      username: 'Ulfa',
      email: 'ulfa@gmail.com',
      experience: '1',
      level: '1'
    },
    {
      id: 2,
      username: 'Anna',
      email: 'anna@gmail.com',
      experience: '2',
      level: '2'
    },
    {
      id: 3,
      username: 'Alya',
      email: 'alya@gmail.com',
      experience: '3',
      level: '3'
    },
  ])

  const [tmpPlayer, setTmpPlayer] = useState({
    username: '',
    email: '',
    experience: '',
    level: ''
  })

  const onCreate = () => {
    setPlayers([
      ...players,
      {
        id: Date.now(),
        username: tmpPlayer.username,
        email: tmpPlayer.email,
        experience: tmpPlayer.experience,
        level: tmpPlayer.level
      }
    ])
    setTmpPlayer({
      username: '',
      email: '',
      experience: '',
      level: ''
    })
  }
  
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePage tmpPlayer={tmpPlayer} setTmpPlayer={setTmpPlayer} onCreate={onCreate} />} />
        <Route path="/players" element={<PlayersPage players={players} />} />
        <Route path="/edit-player" element={<EditPage players={players} />} />
        <Route path="/search-username" element={<SearchUsername players={players} search={search} setSearch={setSearch} />} />
        <Route path="/search-email" element={<SearchEmail players={players} search={search} setSearch={setSearch} />} />
        <Route path="/search-experience" element={<SearchExperience players={players} search={search} setSearch={setSearch} />} />
        <Route path="/search-level" element={<SearchLevel players={players} search={search} setSearch={setSearch} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
