import React,{ useState } from "react"
import { movies } from "../data"
import NavBar from "./NavBar"
function Home() {
    const [allMovies, setAllMovies] = useState(movies)
   console.log(allMovies)
    console.log("hello")
    return (
    <div>
    <header>
        <NavBar /> 
    </header>
            <h1> Home Page </h1>
            </div>

    )
}
export default Home