import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.css";
import { useLocation, Link } from "react-router-dom";

const Watch = ({}) => {
    const location = useLocation();
    const movie = location.state.movie;
    
    return (
        <div className="watch">
            <div className="back">
                <Link to="/" style={{color: "white"}}> <ArrowBackOutlined /> </Link>
                {movie.title}
            </div>
            {/* <video src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" className="video" autoPlay muted progress controls></video> */}
            <video src={movie.video} className="video" autoPlay muted progress controls></video>
        </div>
    )
}

export default Watch;