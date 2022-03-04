import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'

const Header = () => {

    
    return(
        <div className='header'>
            <div className='logoZ'>
                <img className='logoZig' src='https://elitecurrensea.com/wp-content/uploads/2021/08/xNXwFzI-.jpg'/>
            </div>
            <h1>PHONE WORLD</h1>
            <div>
                <Link to="/phone">PHONE WORLD</Link>
            </div>
            {/* <button onClick={() => navigate(-1)}></button> */}
        </div>
    )
}

export default Header