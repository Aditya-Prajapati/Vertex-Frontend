import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import "./list.css";
import ListItem from "../list/ListItem";
import { useRef, useState } from "react";

const List = ({list}) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230); // 230 -> listItem width
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50; // to get distance from the left of the screen 
        // console.log(distance); 

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef} >
                    {list.content.map((item, index) => {
                        return <ListItem key={index} index={index} item={item} />
                    })}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List;