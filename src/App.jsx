import "./app.css";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import MoviePage from "./components/moviePage/MoviePage";
import Search from "./components/searchPage/Search";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

const App = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                <Route exact path="/" element={user ? <Home /> : <Navigate to="/login" />} />
                {user && (
                    <>
                        <Route path="/movies" element={<Home type="movie" />} />
                        <Route path="/series" element={<Home type="series" />} />
                        <Route path="/movie" element={<MoviePage />} />
                        <Route path="/watch" element={<Watch />} />
                        <Route path="/search/:query" element={<Search />} />
                    </>
                )}
                <Route path="*" element={<Navigate to="register" />} />
            </Routes>
        </>
    )
}

export default App;