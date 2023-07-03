import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from "@mui/icons-material";
import "./listItem.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    
    // const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/movies/find/${item}`,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTAwZjdlNjdjZDU1Mjg1ZjJjOGM1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODI5NTQxNSwiZXhwIjoxNjg4NzI3NDE1fQ.iw6_45kCiCefMu_n_kt1kUGfklcMwLtvapQeX5H-bWQ"
                        }
                    }
                )
                setMovie(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getMovie();
    }, [item])

    return (
        <Link to="/watch" state={{movie: movie}}>
            <div
                className="listItem"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ left: isHovered ? (index * 225) : 0 }}
            >
                {/* <img src="https://timelinecovers.pro/facebook-cover/download/tv-show-sherlock-facebook-cover.jpg" alt="" /> */}
                <img src={movie.img} alt="" />
                {isHovered &&
                    <>
                        <video src={movie.trailer} autoPlay muted loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownAltOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className="ageLimit">{movie.ageLimit}+</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="description">
                                {movie.description}
                            </div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                }
            </div>
        </Link>
    )
}

export default ListItem;
