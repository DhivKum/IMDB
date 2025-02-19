import Home from './pages/Home'
import WatchList from './pages/WatchList'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'

export const WatchListContext = React.createContext();

function App() {

  const [watchlist, setWatchlist] = useState(getWatchListFromStorage());

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  function addToWatchList(movieObj){
    console.log('Added to watchlist called', movieObj);
    setWatchlist([...watchlist, movieObj]);

  }

  function removeFromWatchList(movieObj){
    console.log('Removed from watchlist called', movieObj);
    const filteredMovie = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(filteredMovie);

  }

  function getWatchListFromStorage() {
    const watchListFromStorage = JSON.parse(localStorage.getItem("watchlist"));
    if(watchListFromStorage == null) {
        return [];
    }
    return watchListFromStorage
  }

  return (
    <>
    <WatchListContext.Provider value={{watchlist, addToWatchList, removeFromWatchList}}>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/watchlist" element={<WatchList/>} />
    </Routes>
    </BrowserRouter>
    </WatchListContext.Provider>
    </>
  )
}

export default App
