import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try{
                const res = await axios.get(`${type ? `${process.env.REACT_APP_BACKEND_URL}/lists${type && "?type=" + type}${genre ? "&genre=" + genre : ""}` : `${process.env.REACT_APP_BACKEND_URL}/lists` } `,
                    {
                        headers: {
                            token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
                        }
                    }
                );
                setLists(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        getRandomLists();
    }, [type, genre])

    return (
        <div className="home">
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list, index) => {
                return <List key={index} list={list} />
            })}
        </div>
    )
}

export default Home;