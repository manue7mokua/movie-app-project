import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieList  />
    </>
  )
}

export default App
