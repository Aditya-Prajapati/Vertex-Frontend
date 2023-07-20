import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import "./search.css";
import ListItem from "../list/ListItem";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchItem from "./SearchItem";

const Search = () => {
    const { query } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        const searchQuery = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`);
                const temp = res.data.results.filter((listItem) => {
                    return (listItem.media_type !== "person" && listItem.poster_path !== null) && listItem.adult === false;
                });
                setList(temp);
            }
            catch (err) {
                console.log(err);
            }
        }
        searchQuery();
    }, [query])

    return (
        <div className="searchContainer">
            <div className="search">
                <span className="searchTitle">{"Search for - " + query}</span>
                {list.length !== 0 ?
                    <div className="searchBody">
                        <div className="wrapper">
                            <div className="container">
                                {list.map((listItem, key) => {
                                    return <SearchItem className="searchItem" key={key} movie={listItem} />
                                })}
                            </div>
                        </div>
                    </div> :
                    <div className="searchBody" style={{ height: "100vh" }}>
                        <h1>Not found</h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default Search;