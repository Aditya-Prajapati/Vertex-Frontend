import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try{
                const res = await axios.get(`${type ? `http://localhost:8000/api/lists${type && "?type=" + type}&${genre && "?genre=" + genre}` : `http://localhost:8000/api/lists` } `,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTAwZjdlNjdjZDU1Mjg1ZjJjOGM1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODI5OTU5MiwiZXhwIjoxNjg4NzMxNTkyfQ.tZD2X_xyxWPQCHPcYP0mcpgFsQOFrtcpMRTBYcTsBKw"
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
            <Navbar />
            <Featured type={type} />
            {lists.map((list, index) => {
                return <List key={index} list={list} />
            })}
        </div>
    )
}

export default Home;