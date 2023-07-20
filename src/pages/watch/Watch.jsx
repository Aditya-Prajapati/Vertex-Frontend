import { ArrowBackOutlined, LocalConvenienceStoreOutlined } from "@mui/icons-material";
import "./watch.css";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Watch = ({ }) => {
    const location = useLocation();
    const movie = location.state.movie;
    const [trailerId, setTrailerId] = useState(movie.trailer && movie.trailer.match(/(?<=v=|\/embed\/|youtu.be\/|\/v\/|\/vi\/|\/e\/|\/user\/[^#\/]+#p\/[^#\/]+\/|\/watch\?v=|\/watch\?.+&v=|\/watch\?.+&vi=|\/watch\?.+&feature=youtu\.be\/|\/watch\?.+&feature=channel)[^&#?\/]+/));

    if (!movie.trailer) {
        let res;
        const getTrailer = async () => {
            if (movie.media_type === "movie") {
                res = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`)
            }
            else {
                res = await axios.get(`https://api.themoviedb.org/3/tv/${movie.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`)
            }
            setTrailerId(res.data.videos.results.length === 0 ? "none" : res.data.videos.results[0].key);
        }
        getTrailer();
    }

    if (!trailerId) return <div>Loading...</div>;

    return (
        <div className="watch">
            {/* <div className="back">
                <Link to="/" style={{color: "white"}}> <ArrowBackOutlined /> </Link>
                {movie.title}
            </div> */}
            <div className="frame">
                <div className="frameWrapper">
                    {trailerId==="none" ?
                        (<div className="notFound" style={{ color: "white" }}>
                        <h1>Not found</h1>
                    </div> ) :
                    (<iframe
                        width="560"
                        height="315"
                        src={`https://youtube.com/embed/${trailerId || trailerId[0]}?rel=0&autoplay=1`}
                        title={movie.name || movie.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                    )}
                </div>
            </div>
            <div className="imgContainer">
                <img src={movie.img || `http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            </div>
        </div>
    )
}

export default Watch;