import Logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='flex items-center space-x-8'>
        <img className='w-48' src={Logo} alt="Logo" />
        <Link className='text-3xl text-blue-500 font-bold' to="/"> Home </Link>
        <Link className='text-3xl text-blue-500 font-bold' to="/watchlist">WatchList</Link>
    </div>
  )
}

export default Navbar