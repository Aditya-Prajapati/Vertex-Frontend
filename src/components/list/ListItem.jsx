import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from "@mui/icons-material";
import "./listItem.css"
import { useState } from "react";

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div
            className="listItem"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{left: isHovered ? (index*225) : 0}}
        >
            <img src="https://timelinecovers.pro/facebook-cover/download/tv-show-sherlock-facebook-cover.jpg" alt="" />
            {isHovered && 
                <>
                    <video src={trailer} autoPlay muted loop  />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hr 24 min</span>
                            <span className="ageLimit">16+</span>
                            <span>2010</span>
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nobis molestias ut facilis?
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            }
        </div>
    )
}

export default ListItem;
