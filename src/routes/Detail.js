import {Link, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import Button from "../Button";

const Detail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = useCallback(async () => {
    const json = await ((await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json());
    setMovie(json.data.movie);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [])

  return (
    <div>
      <div><Link to={"/"}><Button text={"back"}/></Link></div>
      <div>
        <img src={movie.medium_cover_image}/>
        <h1>{movie.title}</h1>
        <h3>{movie.description_full}</h3>
      </div>
      <div>
        <h2>Genres: {movie.genres?.map((m) => (
          <div>{m}</div>
        ))}</h2>
      </div>
    </div>
  );
}
export default Detail;
