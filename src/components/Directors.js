import React from "react"
import { directors } from "../data"
import DirectorCard from "./DirectorCard"
function Directors() {
    const directorCards = directors.map((d) => (
        <div>
        <DirectorCard
        key={d.name}
        director={d}
        />
        </div>
    ))
    return (
        <div>
        <h1>Directors Page</h1>
        {directorCards}
        </div>
    )   
}
export default Directors