import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from "@mui/icons-material";
import "./searchItem.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchItem = ({ movie }) => {
    
    return (
        <Link to={"/movie"} style={{ textDecoration: "none" }} state={{ movie: movie }}> 
            <div
                className="searchItem"
            >
                <div className="container">
                    <div className="imgContainer">
                        <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                    </div>
                    <div className="itemTitle">
                        <span>{movie.name || movie.title}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchItem;