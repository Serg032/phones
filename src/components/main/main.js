import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import PhoneCard from "../phoneCard/phoneCard";
import './main.css'

const Main = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {

        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };

        fetch(
            "http://localhost:8000/phone", 
            requestOptions
        )
        .then((response) => (response.json()))
        .then((json) => setPhones(json))
        });
        return(
            <div className="main">
                <div>
                    <h2 className="smartphones">SMARTPHONES</h2>
                </div>
               <div className="phonesBox">
                    {phones?.map((phone) => (
                        <PhoneCard
                            src = {phone.img}
                            title = {phone.title}
                            description = {phone.description}
                            color = {phone.color}
                            price = {phone.price}
                            _id = {phone._id}
                            />
                    ))}
               </div>
               <Footer className= 'footer'/>
            </div>
        )
    }

    export default Main
