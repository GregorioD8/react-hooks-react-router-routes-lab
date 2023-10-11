import {Link} from 'react-router-dom';

function DirectorCard({director}) {

  const movieList = director.movies.map((m) => (
    
    <li key={m}> 
    {m} 
    </li>
    
  ))
  
  return (
    <article>
        <h1>{director.name}</h1>
        <ul>
          {movieList}
        </ul>
    </article>
  );
};

export default DirectorCard;