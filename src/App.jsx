import Home from './pages/Home'
import WatchList from './pages/WatchList'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/watchlist" element={<WatchList/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
