import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../footer/footer";
import './phoneView.css'

const PhoneView = () => {

    const [phone, setPhone] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        
        fetch(`http://localhost:8000/phone/${params._id}` )
        .then((response) => response.json())
        .then((json) => setPhone(json))
    })
    return(
        <div className="phoneView">
            <div className="box">
            <div className="title">
                <h2>Smartphone View</h2>
            </div>
            <div className="phone">
                <div className="logoPlace">
                    <img className="logo" src={phone?.img}/>
                </div>
                <div className="info">
                    <h4>{phone?.title}</h4>
                    <label>Description: {phone?.description}</label>
                    <br/>
                    <h5>Color: {phone?.color}</h5>
                    <h4>Price: {phone?.price}$</h4>
                    <p>id: {phone._id}</p>
                </div>

            </div>
            <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )
}

export default PhoneView