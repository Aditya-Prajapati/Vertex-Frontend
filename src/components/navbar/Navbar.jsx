import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
import logo from "../../images/cover.png";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
    const showNavbar = useMediaQuery({ query: "(min-width: 701px)" });

    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchClicked, setSearchClicked] = useState(false);
    const [hamburgerClicked, setHamburgerClicked] = useState({ isClicked: false, index: 0 });
    const { dispatch } = useContext(AuthContext);
    const searchInputRef = useRef(null);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => { window.onscroll = null };
    }

    useEffect(() => {
        if (searchClicked) {
            searchInputRef.current.focus();
        }
    }, [searchClicked]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchClicked(false);
        setHamburgerClicked({ isClicked: false, index: 4 });
        const searchTextCopy = searchText;
        setSearchText("");
        navigate(`/search/${searchTextCopy}`);
    }

    console.log(hamburgerClicked);
    return (
        <>
            <div className={`hamburger ${hamburgerClicked.isClicked ? "hamburgerActive" : ""}`} onClick={() => setHamburgerClicked((prevState) => ({ ...prevState, isClicked: !hamburgerClicked.isClicked }))}>;
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`${isScrolled ? "navbar-top scrolled" : "navbar-top"} ${hamburgerClicked.isClicked ? "navbarActive" : ""}`}>
                <div className="top">
                    <div className="left">
                        <div className="logoContainer">
                            <img className="logo" width="90px" src={logo} alt="logo" />
                        </div>
                        {(showNavbar || hamburgerClicked.isClicked || hamburgerClicked.index === 0) &&
                            <Link to="/" className="link" onClick={() => setHamburgerClicked({ isClicked: false, index: 0 })}> <span>Home</span> </Link>
                        }
                        {(showNavbar || hamburgerClicked.isClicked || hamburgerClicked.index === 1) &&
                            <Link to="/movies" className="link" onClick={() => setHamburgerClicked({ isClicked: false, index: 1 })}> <span className="navbarMainLinks">Movies</span> </Link>
                        }
                        {(showNavbar || hamburgerClicked.isClicked || hamburgerClicked.index === 2) &&
                            <Link to="/series" className="link" onClick={() => setHamburgerClicked({ isClicked: false, index: 2 })}> <span className="navbarMainLinks">Series</span> </Link>
                        }
                        {(hamburgerClicked.index === 4) &&
                            <Link to="/search" className="link" onClick={() => setHamburgerClicked({ isClicked: false, index: 2 })}> <span className="navbarMainLinks">Search</span> </Link>
                        }
                    </div>
                    <div className="right">
                        {/* <Search className="icon" /> */}
                        {/* <span>USER</span> */}
                        {/* <Notifications className="icon" /> */}
                        {/* <img src="#" alt="user" width="50px" height="50px" /> */}
                        <form className="searchForm" onSubmit={handleSearch}>
                            <div type="text" className="searchBtn" onClick={() => setSearchClicked((prevState) => !prevState)}>
                                <Search className="searchIcon" fontSize="small" />
                            </div>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search"
                                className={searchClicked ? "searchClicked" : ""}
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                                style={{ display: ((!hamburgerClicked.isClicked && !showNavbar) && "none") }}
                            />
                        </form>
                        <div className="profile">
                            <ArrowDropDown className="icon" />
                            <div className="options">
                                {/* <span>Settings</span> */}
                                <span onClick={() => dispatch(logout())}>Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;