import React from "react";
import { Link } from "react-router-dom";
import './landing.css'

const Landing = () => {
    return(
        <div className="landing">
            <div className="phoneWorld">
                <Link to = "/phone"><button>Phone World</button></Link>
            </div>
        </div>
    )
}

export default Landing