import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import "./featured.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies/random?type=${type}`,
                    {
                        headers: {
                            token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
                        }
                    }
                )
                setContent(res.data[0]);
            }
            catch (err) {
                console.log(err);
            }
        }
        getRandomContent();
    }, [type])

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
                        <option value="genre">Genre</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="adventure">Adventure</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="drama">Drama</option>
                        <option value="animation">Animation</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )
            }
            <img src={content.img} alt="" />
            <div className="info">
                {/* <img src="https://timelinecovers.pro/facebook-cover/download/tv-show-sherlock-facebook-cover.jpg" alt="" /> */}
                <span className="description">
                    <strong>{content.title}</strong>
                </span>
                <div className="buttons">
                    <Link to={content.trailer} style={{ textDecoration: "none" }}>
                        <button className="play">
                            <PlayArrow />
                            <span>Play</span>
                        </button>
                    </Link>
                    {/* <button className="more"> */}
                    {/* <InfoOutlined /> */}
                    {/* <span>Info</span> */}
                    {/* </button> */}
                </div>
            </div>
        </div>
    )
}

export default Featured;