import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Div } from "./style-details"

function Details() {
    const { id } = useParams()

    const [serie, setSerie] = useState({})

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=291da6e68320eb0d68736c1c02a163fe&language=en-US`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const { name, overview, number_of_seasons, number_of_episodes, poster_path} = data

            const serie = {
                id,
                name,
                img:`https://image.tmdb.org/t/p/w500${poster_path}`,
                overview,
                number_of_seasons,
                number_of_episodes,
            }

            setSerie(serie)

        })
    }, [id])

    return (
        <Div>
            <div className="serie">
            <img src={serie.img} alt={serie.name} />
            </div>

            <div className="details">
                <h1>{serie.name}</h1>
                <span>{serie.tagline}</span>
                <span>{serie.overview}</span>
                <br />
                <span>{serie.number_of_seasons} seasons</span>
                <br />
                <span>{serie.number_of_episodes} episodes</span>
                <br />
                <Link to="/">
                <button>Go back</button>
                </Link>
            </div>
            
        </Div>
    )
}

export default Details