import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Movie = ({id, coverImg, title, summary, genre}) => {
  return (
    <div key={id}>
      <img src={coverImg} alt={123}/>
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genre?.map((g) =>
          <li key={g}>{g}</li>
        )}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
}
export default Movie;
