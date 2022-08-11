import { useState } from 'react'
import { Container } from './style'
import './styles/App.css'

function App() {

  return (
    <Container className="App">
      <h1>MoviesLib</h1>
      <hr />

      <ul>
        <li>
          <a href="#"><img src="https://media.fstatic.com/bwmrNmCCyk4NFoOVdZ1lJBRUth4=/210x312/smart/media/movies/covers/2021/10/FBs8-vLUUAIm94F.jpg" alt="Capa filme" /></a>
          <span>The Batman</span>
          <span></span>
        </li>

        <li>
          <a href="#"><img src="https://media.fstatic.com/bwmrNmCCyk4NFoOVdZ1lJBRUth4=/210x312/smart/media/movies/covers/2021/10/FBs8-vLUUAIm94F.jpg" alt="Capa filme" /></a>
          <span>The Batman</span>
          <span></span>
        </li>

        <li>
          <a href="#"><img src="https://media.fstatic.com/bwmrNmCCyk4NFoOVdZ1lJBRUth4=/210x312/smart/media/movies/covers/2021/10/FBs8-vLUUAIm94F.jpg" alt="Capa filme" /></a>
          <span>The Batman</span>
          <span></span>
        </li>
      </ul>

    </Container>
  )
}

export default App