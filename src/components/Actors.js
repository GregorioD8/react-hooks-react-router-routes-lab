import React from "react"
import { actors } from "../data"
import ActorCard from "./ActorCard"

function Actors() {

    const actorsList = actors.map((a) => (
        <div>
            <ActorCard 
            key={a.name}
            actor={a}
            />
        </div>
    ))
    return (
        <div>
        <h1> 
            Actors Page
        </h1>
        {actorsList}

        </div>
    )
}
export default Actors