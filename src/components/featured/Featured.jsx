import React from 'react'
import './featured.scss'
import NotifsIcon from '@mui/icons-material/Notifications';

export default function Featured() {
    return (
        <div className="featured">
            <img 
                src="https://images.pexels.com/photos/7991492/pexels-photo-7991492.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="this weeks featured film"
            />
            <div className="info">
                <h2 class="spotlight">In the spotlight</h2>
                <span className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam quas, sint saepe, id officia aut, animi beatae dignissimos cumque dolor commodi illo ullam consequatur labore aspernatur delectus et amet.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, soluta esse? Aspernatur, incidunt consequatur voluptatum impedit, quis sed possimus magnam iste cumque consectetur consequuntur doloremque cum! Dolore libero deserunt consectetur?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et alias pariatur maiores magnam aliquid quam ratione? Odio reiciendis optio unde ad ut, cumque commodi natus minus, sapiente voluptatem, est suscipit?
                </span>
                <div className="notif">
                    <button className="more">
                        <NotifsIcon />
                        {/* <span>Click me to be notified of spotlight releases!</span> */}
                    </button> 
                </div>
                
            </div>
        </div>
    )
}


