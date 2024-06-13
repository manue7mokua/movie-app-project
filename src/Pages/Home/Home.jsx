import { useState } from 'react'
import './Home.css'
import MovieList from '../../components/MovieList/MovieList'
import Header from '../../components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MovieList />
    </>
  )
}

export default App
