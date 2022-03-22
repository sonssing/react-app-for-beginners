import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, rating, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title}></img>
            <h1>
                <Link to={`/movie/${id}`}>{title}</Link> ({rating})</h1>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}</p>
            <ul>
                {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;