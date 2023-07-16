import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { PlayArrow } from "@mui/icons-material";
import "./moviePage.css";

const MoviePage = () => {
    const location = useLocation();
    const movie = location.state.movie;

    return (
        <div className="moviePage">
            <img src={movie.img} alt="" />
            <div className="info">
                <div className="content">
                    <h1 className="title">
                        <strong>{movie.title}</strong>
                    </h1>
                </div>
                <div className="content">
                    <span className="duration">
                        <strong>{movie.duration}</strong>
                    </span>
                    <span className="genre" style={{ marginLeft: movie.genre ? "0px" :  "20px" }}>
                        <strong>{movie.genre[0].toUpperCase() + movie.genre.slice(1)}</strong>
                    </span>
                </div>
                <div className="content">
                    <span className="description">
                        <strong>{movie.description}</strong>
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