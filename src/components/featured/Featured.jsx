import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import "./featured.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState([]);

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
                setContent(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getRandomContent();
    }, [type])
    
    if (content.length === 0) return <div>Loading</div>;

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
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={content[0].img} alt="" />
                        {/* <img src="https://timelinecovers.pro/facebook-cover/download/tv-show-sherlock-facebook-cover.jpg" alt="" /> */}
                        <div className="info">
                            <h1 className="description">
                                <strong>{content[0].title}</strong>
                            </h1>
                            <div className="buttons">
                                <Link to="/watch" style={{ textDecoration: "none" }} state={{ movie: content[0] }}>
                                    <button className="play"> 
                                        <PlayArrow />
                                        <span>Play trailer</span>
                                    </button>
                                </Link>
                                <Link to="/movie" style={{ textDecoration: "none" }} state={{ movie: content[0] }}>
                                    <button className="more">
                                        <InfoOutlined />
                                        <span>Info</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={content[1].img} alt="" />
                        {/* <img src="https://timelinecovers.pro/facebook-cover/download/tv-show-sherlock-facebook-cover.jpg" alt="" /> */}
                        <div className="info">
                            <h1 className="description">
                                <strong>{content[1].title}</strong>
                            </h1>
                            <div className="buttons">
                                <Link to="/watch" style={{ textDecoration: "none" }} state={{ movie: content[1] }}>
                                    <button className="play">
                                        <PlayArrow />
                                        <span>Play trailer</span>
                                    </button>
                                </Link>
                                <Link to="/movie" style={{ textDecoration: "none" }} state={{ movie: content[1] }}>
                                    <button className="more">
                                        <InfoOutlined />
                                        <span>Info</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={content[2].img} alt="" />
                        {/* <img src="https://timelinecovers.pro/facebook-cover/download/tv-show-sherlock-facebook-cover.jpg" alt="" /> */}
                        <div className="info">
                            <h1 className="description">
                                <strong>{content[2].title}</strong>
                            </h1>
                            <div className="buttons">
                                <Link to="/watch" style={{ textDecoration: "none" }} state={{ movie: content[2] }}>
                                    <button className="play">
                                        <PlayArrow />
                                        <span>Play trailer</span>
                                    </button>
                                </Link>
                                <Link to="/movie" style={{ textDecoration: "none" }} state={{ movie: content[2] }}>
                                    <button className="more">
                                        <InfoOutlined />
                                        <span>Info</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Featured;