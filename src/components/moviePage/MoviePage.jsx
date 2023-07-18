import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { PlayArrow } from "@mui/icons-material";
import "./moviePage.css";

const MoviePage = () => {
    const location = useLocation();
    const movie = location.state.movie;
    console.log(movie, "hello");

    return (
        <div className="moviePage">
            <img src={movie.img || `http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            <div className="info">
                <div className="content">
                    <h1 className="title">
                        <strong>{movie.name || movie.title}</strong>
                    </h1>
                </div>
                <div className="content">
                    <span className="duration">
                        <strong>{(movie.duration || movie.first_air_date || movie.year)}</strong>
                    </span>
                    <span className="genre" style={{ marginLeft: (movie.duration || movie.first_air_date || movie.year)  ? "10px" : "0px" }}>
                        <strong>{movie.media_type && movie.media_type.toUpperCase() || movie.genre && movie.genre[0].toUpperCase() + movie.genre.slice(1)}</strong>
                    </span>
                </div>
                <div className="content">
                    <span className="description">
                        <strong>{movie.description || movie.overview}</strong>
                    </span>
                </div>
                <div className="buttons">
                    <Link to="/watch" style={{ textDecoration: "none" }} state={{ movie: movie }}> 
                        <button className="play">
                            <PlayArrow />
                            <span>Play trailer</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;