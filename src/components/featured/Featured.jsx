import React from 'react'
import './featured.scss'
import NotifsIcon from '@mui/icons-material/Notifications';
import PlayIcon from '@mui/icons-material/PlayCircle';

export default function Featured() {
    return (
        <div className="featured">
            <img 
                src="https://images.pexels.com/photos/7991492/pexels-photo-7991492.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="this weeks featured film"
            />
            <div className="info">
                <PlayIcon />
                <h2 class="spotlight">In the spotlight</h2>
                <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam quas, sint saepe, id officia aut, animi beatae dignissimos cumque dolor commodi illo ullam consequatur labore aspernatur delectus et amet.
                    Aspernatur, incidunt consequatur voluptatum impedit, quis sed possimus magnam iste cumque consectetur consequuntur doloremque! 
                </span>
                </div>
                <div className="notif">
                    <button className="more">
                        <NotifsIcon />
                        {/* <span>Click me to be notified of spotlight releases!</span> */}
                    </button> 
                </div>
        </div>
    )
}


