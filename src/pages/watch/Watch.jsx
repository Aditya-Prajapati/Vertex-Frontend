import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.css";
import { useLocation, Link } from "react-router-dom";

const Watch = ({ }) => {
    const location = useLocation();
    const movie = location.state.movie;
    const trailerId = movie.trailer.match(/(?<=v=|\/embed\/|youtu.be\/|\/v\/|\/vi\/|\/e\/|\/user\/[^#\/]+#p\/[^#\/]+\/|\/watch\?v=|\/watch\?.+&v=|\/watch\?.+&vi=|\/watch\?.+&feature=youtu\.be\/|\/watch\?.+&feature=channel)[^&#?\/]+/);

    return (
        <div className="watch">
            {/* <div className="back">
                <Link to="/" style={{color: "white"}}> <ArrowBackOutlined /> </Link>
                {movie.title}
            </div> */}
            <div className="frame">
                <div className="frameWrapper">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://youtube.com/embed/${trailerId[0]}?rel=0&autoplay=1`}
                        title={movie.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
            <div className="imgContainer">
                <img src={movie.img} alt="" />
            </div>
        </div>
    )
}

export default Watch;