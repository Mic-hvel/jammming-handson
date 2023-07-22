import React from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'


import './App.css'




const App = () => {
  return (
    <div className='main'>
      <div className='header'>
        <Header />
      </div>
        <div className='body'>
          <div className='searchBar'>
            <SearchBar />
          </div>
          <div className='searchResults'>
            <SearchResults />
          </div>
          <div className='playlist'>
            <Playlist />
          </div>
          
        </div>
      
    </div>
  )
}

export default App