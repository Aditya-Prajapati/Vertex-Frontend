import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import "./list.css";
import ListItem from "../list/ListItem";
import { useRef, useState } from "react";

const List = ({ list }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 260); // 260 -> listItem width
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 55; // to get distance from the left of the screen 
        // console.log(distance); 

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${260 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-260 + distance}px)`;
        }
    }

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="listBody">
                <div className="sliderArrowContainer left">
                    <ArrowBackIosOutlined
                        className="sliderArrow left"
                        fontSize="4px"
                        onClick={() => handleClick("left")}
                        style={{ display: !isMoved && "none" }}
                    />
                </div>
                <div className="wrapper">
                    <div className="container" ref={listRef} >
                        {list.content.map((item, index) => {
                            return <ListItem key={index} index={index} item={item} />
                        })}
                    </div>
                </div>
                <div className="sliderArrowContainer right">
                    <ArrowForwardIosOutlined
                        className="sliderArrow right"
                        fontSize="4px"
                        onClick={() => handleClick("right")}
                    />
                </div>
            </div>
        </div>
    )
}

export default List;