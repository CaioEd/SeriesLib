import { useState, useEffect } from 'react'
import { Container, SeriesList, Series } from './style'
import { Link } from "react-router-dom";
import './styles/App.css'

function App() {

  const [movies, setMovies] = useState([])
  const img_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() =>{
  // consumindo a api

  fetch('https://api.themoviedb.org/3/tv/popular?api_key=291da6e68320eb0d68736c1c02a163fe&language=en-US&page=1')
  .then(response => response.json())
  .then(data => setMovies(data.results))
  }, [])

  return (
    <Container className="App">
      <h1>SeriesLib</h1>
      <hr />

      <SeriesList>

      {movies.map(movie =>{
          return(
            <Series key={movie.id}>

              <Link to={`/details/${movie.id}`}><img src={`${img_path}${movie.poster_path}`} alt={movie.name} /></Link>
              <span>{movie.name}</span>
              <span>{movie.vote_average}</span>
            </Series>
          )
        })}

      </SeriesList>

    </Container>
  )
}

export default App