import PropTypes from "prop-types";

const Movie = ({id, coverImg, title, summary, genre}) => {
  return (
    <div key={id}>
      <img src={coverImg}/>
      <h2>{title}</h2>
      <p>{summary}</p>
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
