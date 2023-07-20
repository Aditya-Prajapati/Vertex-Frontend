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
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies/find/${item}`,
                    {
                        headers: {
                            token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
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

    if (!movie || Object.keys(movie).length === 0) return <div>Loading...</div>;

    return (
        // first Link -> to go to watch page with movie -> state={{ movie: movie }}
        <Link to={"./movie"} style={{ textDecoration: "none" }} state={{ movie: movie }}> 
            <div
                className="listItem"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* {!isHovered && 
                } */}
                <div className="container">
                    <img src={movie.img} alt="" />
                    <div className="itemTitle">
                        <span>{movie.title}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ListItem;

// {isHovered &&
//     <>
//         {/* <video src={movie.trailer} autoPlay muted loop /> */}
//         <div className="itemInfo">
//             <div className="icons">
//                 <PlayArrow className="icon" />
//                 <Add className="icon" />
//                 <ThumbUpAltOutlined className="icon" />
//                 <ThumbDownAltOutlined className="icon" />
//             </div>
//             <div className="itemInfoTop">
//                 <span>{movie.duration}</span>
//                 <span className="ageLimit">{movie.ageLimit}+</span>
//                 <span>{movie.year}</span>
//             </div>
//             <div className="description">
//                 {movie.description.substring(0, 90) + "..."}
//             </div>
//             <div className="genre">{movie.genre}</div>
//         </div>
//     </>
// }