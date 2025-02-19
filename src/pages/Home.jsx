import Banner from '../components/Banner';
import Movies from '../components/Movies'

function Home(props) {
    const{watchlist, addToWatchList, removeFromWatchList} = props;

  return (
   <>
    <Banner/>
    <Movies watchlist={watchlist} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList}/>
   
   </>
  )
}

export default Home