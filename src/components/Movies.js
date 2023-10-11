import React from "react"
import { movies } from "../data"
import MovieCard from "./MovieCard"
function Movies() {
    const movieCards = movies.map((m) => ( 
        <div>
        <MovieCard
        key={m.title}
        movie={m}
        />
        </div>
    ))
    return (
        <div>
        
        <h1>Movies Page</h1>
        {movieCards}
        
        </div>
    )
}
export default Movies