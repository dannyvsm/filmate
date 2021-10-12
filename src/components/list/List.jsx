import React from 'react'
import "./list.scss"
import ListItem from '../listItem/ListItem';
import LeftArrow from '@mui/icons-material/ChevronLeft';
import RightArrow from '@mui/icons-material/ChevronRight';


export default function List() {
    return (
        <div className="list">
            <span className="listTitle">Genre Picks</span>
            <div className="wrapper">
                <LeftArrow class="sliderbtn left"/>
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
                    </div>
                <RightArrow class="sliderbtn right" />
                </div>
                <span className="listTitle">Essential Viewing</span>
            <div className="wrapper">
                <LeftArrow class="sliderbtn left"/>
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
                    </div>
                <RightArrow class="sliderbtn right" />
                </div>
        </div>
    )
}
