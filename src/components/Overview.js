import React, { useState, useEffect } from "react"
import axios from "axios"
import OverviewImage from "./OverviewImage"
import CommonButton from "./CommonButton"

function Overview() {

    const [infoLink, setInfoLink] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/indexPage')
            .then(function ({ data }) {
                const result = []
                data.forEach(({ title, subtitle, description, imagesrc, buttontitle }, i) => {
                    result.push(resultHTML(i, title, subtitle, description, imagesrc, buttontitle))
                });
                setInfoLink(result)
            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])

    return (
        <div>{infoLink}</div>
    )
}


function resultHTML(i, title, subtitle, description, imagesrc, buttontitle) {
    return (
        <section key={i}>
            <div className="info row">
                <div className="info__desc col-12 col-md-6">
                    <h1 className="info__desc__title">{title}</h1>
                    <span className="info__desc__subtitle">{subtitle}</span>
                    <p className="info__desc__description">{description}</p>
                    <CommonButton link="#" cls="common-button" text={buttontitle} />
                </div>
                <div className="info__img col-12 col-md-6">
                    <figure>
                        <OverviewImage src={imagesrc} />
                    </figure>
                </div>
            </div>
        </section>
    )
}




export default Overview