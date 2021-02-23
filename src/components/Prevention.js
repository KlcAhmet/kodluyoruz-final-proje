import React, { useState, useEffect } from "react"
import axios from "axios"
import { Title, Subtitle, Description, OverviewImage, CardTitle } from "../componentmap/maincomponents"
import '../css/Prevention.css'

function Prevention() {
    const [header, setHeader] = useState([])
    const [information, setInformation] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3004/preventionPage')
            .then(function ({ data }) {
                const result = []
                setHeader(data)
                data.information.forEach(({ id, title, description, imagesrc }) => {
                    result.push(resultHTML(id, title, description, imagesrc))
                });
                setInformation(result)
            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])
    /* console.log(information) */ // -------------

    return (
        <section>
            <div className="page-header">
                <div className="info">
                    <Title cls="info__title" title={header.title} />
                    <Subtitle cls="info__subtitle" title={header.subtitle} />
                    <Description cls="info__description" title={header.description} />
                </div>
            </div>

            <div className="reverse-info">
                {information}
            </div>
        </section>
    )
}



function resultHTML(id, title, description, imagesrc) {
    return (
        <section key={id}>
            <div className="head row">
                <div className="info col-12 col-md-6">
                    <Subtitle cls="info__subtitle" title={id} />
                    <CardTitle cls="info__title" title={title} />
                    <Description cls="info__desc" title={description} />
                </div>
                <div className="head__img col-12 col-md-6">
                    <figure>
                        <OverviewImage cls="" src={imagesrc} />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Prevention