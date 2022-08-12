import { useState } from 'react'
import { Container, MovieList, Movie } from './style'
import './styles/App.css'

function App() {

  const movies = [
    {
      id: 1,
      title: 'The Batman',
      img_url: "https://media.fstatic.com/bwmrNmCCyk4NFoOVdZ1lJBRUth4=/210x312/smart/media/movies/covers/2021/10/FBs8-vLUUAIm94F.jpg"
    },
    {
      id: 2,
      title: 'Spider-Man',
      img_url: "https://media.fstatic.com/bwmrNmCCyk4NFoOVdZ1lJBRUth4=/210x312/smart/media/movies/covers/2021/10/FBs8-vLUUAIm94F.jpg"
    },
    {
      id: 3,
      title: 'The Batman',
      img_url: "https://media.fstatic.com/bwmrNmCCyk4NFoOVdZ1lJBRUth4=/210x312/smart/media/movies/covers/2021/10/FBs8-vLUUAIm94F.jpg"
    }

  ]

  return (
    <Container className="App">
      <h1>MoviesLib</h1>
      <hr />

      <MovieList>

      {movies.map(movie =>{
          return(
            <Movie key={movie.id}>
              <a href="#"><img src={movie.img_url} alt={movie.title} /></a>
              <span>{movie.title}</span>
              <span></span>
            </Movie>
          )
        })}

      </MovieList>

    </Container>
  )
}

export default App