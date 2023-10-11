import React from "react"

function ActorCard( { actor } ) {

    const movieList = actor.movies.map((m) => (
        <li key={m}>{m}</li>
    ))
    return (
        <div>
            <h1>{actor.name}</h1>
        <ul>
            {movieList}
        </ul>
        </div>
    )
}
export default ActorCard