import Home from "./components/Home"
import Movies from "./components/Movies"
import Directors from "./components/Directors"
import Actors from "./components/Actors"

const routes = [
  {
    path: "/",
    element: <Home /> 
  },
  {
    path: "/movies",
    element: <Movies /> 
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  }
  ];

export default routes; 