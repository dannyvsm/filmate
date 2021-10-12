import React from 'react'
import "./list.scss"
import ListItem from '../listItem/ListItem';
import PlayIcon from '@mui/icons-material/PlayCircle';

export default function List() {
    return (
        <div className="list">
            <span className="listTitle">This Week's Genre Favourites</span>
            <div className="wrapper">
                <PlayIcon />
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </div>
            <span className="listTitle">Essential Viewing</span>
            <div className="wrapper">
                <PlayIcon />
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </div>
            <span className="listTitle">This week's genre favourites</span>
            <div className="wrapper">
                <PlayIcon />
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </div>
        </div>
    )
}
