import React, { useState, useEffect } from "react"
import axios from "axios"
import OverviewImage from "./OverviewImage"

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
            <div className="row">
                <div className="info col-12 col-md-6">
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
                    <p>{description}</p>
                    <button>{buttontitle}</button>
                    <div className="info__img">
                        <figure>
                            <OverviewImage param={imagesrc} />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Overview