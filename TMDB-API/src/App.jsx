import { useState, useEffect } from 'react'
import { Container, SeriesList, Series } from './style'
import { Link } from "react-router-dom";
import API_KEY from './api-key';
import './styles/App.css'

function App() {

  const [movies, setMovies] = useState([])
  const img_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() =>{
  // consumindo a api

  fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
  .then(response => response.json())
  .then(data => setMovies(data.results))
  }, [])

  return (
    <Container className="App">
      <h1>TMDB</h1>
      <hr />

      <SeriesList>

      {movies.map(movie =>{
          return(
            <Series key={movie.id}>

              <Link to={`/details/${movie.id}`}><img src={`${img_path}${movie.poster_path}`} alt={movie.name} /></Link>
              <span>{movie.name}</span>
              <span>{movie.vote_average.toFixed(1)}</span>
            </Series>
          )
        })}

      </SeriesList>

    </Container>
  )
}

export default App