import {Link} from 'react-router-dom';

function MovieCard({movie}) {

  const genres = movie.genres.map((g) => (
    
    <li key={g}> 
    {g} 
    </li>
    
  ))
  
  return (
    <article>
        <h2>{movie.title}</h2>
        {"runtime: " + movie.time + " mins"}
        <ul>
          {genres}
        </ul>
    </article>
  );
};

export default MovieCard;