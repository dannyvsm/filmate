import React from 'react';
import { useRef, useState } from 'react';
import "./list.scss";
import ListItem from '../listItem/ListItem';
import LeftArrow from '@mui/icons-material/ChevronLeft';
import RightArrow from '@mui/icons-material/ChevronRight';


export default function List() {

    const [slideNumber, setSliderNumber] = useState(0)

    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSliderNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${250 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSliderNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-250 + distance}px)`;
        }
        console.log(distance)
    }

    return (
        <div className="list">
            <span className="listTitle">Genre Picks</span>
            <div className="wrapper">
                <LeftArrow class="sliderbtn left" onClick={() => handleClick("left")}/>
                    {/* <PlayIcon className="playbtn"/> */}
                    <div className="container" ref={listRef}>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </div>
                <RightArrow class="sliderbtn right" onClick={() => handleClick("right")}/>
                </div>
                <span className="listTitle">Essential Viewing</span>
            <div className="wrapper">
                <LeftArrow class="sliderbtn left" onClick={() => handleClick("left")}/>
                    {/* <PlayIcon className="playbtn"/> */}
                    <div className="container">
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </div>
                <RightArrow class="sliderbtn right" onClick={() => handleClick("right")}/>
                </div>
        </div>
    )
}
