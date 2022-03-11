import Movie from "../components/Movie";
import {useEffect, useState} from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
    setMovies(response.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div>{loading ? <h1>Loading...</h1> : (
      <div>
        {movies.map((movie) => (
          <Movie
            coverImg={movie.medium_cover_image}
            id={movie.id}
            title={movie.title}
            genre={movie.genre}
            summary={movie.summary}
          />
        ))}
      </div>
    )
    }
    </div>
  )
}

export default Home;
