import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './phoneCard.css'

const PhoneCard = (props) => {
    const navigate = useNavigate(`/view/${props._id}`)
    return(
        <div
            onClick={() => navigate(`/phone/${props._id}`)}
            className="phoneCard">
            <div className="logo">
                <img className="phoneImg" src = {props.src}/>
            </div>
            <div className="phoneData">
                <h4>{props.title}</h4>
                <label className="discription">{props.description}</label>
                <br/>
                <h5>Color: {props.color}</h5>
                <h5>Price: {props.price} $</h5>
                <label className="id">id: {props._id}</label>
                {/* <button 
                    className="moreInfo"
                    onClick={() => navigate(`/phone/${props._id}`)}>
                    More Info
                </button> */}
            </div>
        </div>
    )
}

export default PhoneCard