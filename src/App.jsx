import Home from './pages/Home'
import WatchList from './pages/WatchList'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
function App() {

  const [watchlist, setWatchlist] = useState([]);

  function addToWatchList(movieObj){
    console.log('Added to watchlist called', movieObj);
    setWatchlist([...watchlist, movieObj]);

  }

  function removeFromWatchList(movieObj){
    console.log('Removed from watchlist called', movieObj);
    const filteredMovie = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(filteredMovie);

  }

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home watchlist={watchlist} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} />} />
      <Route path="/watchlist" element={<WatchList watchlist={watchlist}/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
