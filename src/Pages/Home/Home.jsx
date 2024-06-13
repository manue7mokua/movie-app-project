import { useState } from 'react'
import './Home.css'
import MovieList from '../../components/MovieList/MovieList'
import Header from '../../components/Header/Header'
import peakyblinders from '../../assets/peakyblinders.png'
import playbutton from '../../assets/play.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='home-page'>
      <Header />
      <div className='hero'>
        <img src={peakyblinders} alt="Logo" className='banner-image'/>
        
        {/* <div className='banner-caption'>
          <p>"Peaky Blinders: A gritty crime saga of power, loyalty, and survival in the treacherous underworld of post-war Birmingham."</p>
        </div> */}

        <div className='banner-buttons'>
          <button className='btn'><img src={playbutton} alt='' className='banner-icons'/></button>
        </div>
      </div>
      <MovieList />
    </div>
  )
}

export default App
