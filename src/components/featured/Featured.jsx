import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import "./featured.css";

const Featured = ({type}) => {
    return(
        <div className="featured">
            {type && (
                    <div className="category">
                        <span>{type==="movie" ? "Movie" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
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
            <img src="https://timelinecovers.pro/facebook-cover/download/tv-show-sherlock-facebook-cover.jpg" alt="" />
            <div className="info">
                {/* <img src="https://timelinecovers.pro/facebook-cover/download/tv-show-sherlock-facebook-cover.jpg" alt="" /> */}
                <span className="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, aliquam laboriosam aspernatur delectus fuga esse at optio beatae doloribus voluptates?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured;