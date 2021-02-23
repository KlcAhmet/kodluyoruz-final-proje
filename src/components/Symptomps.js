import React, { useState, useEffect } from "react"
import axios from "axios"
import { Title, Subtitle, Description, OverviewImage } from "../componentmap/maincomponents"

function Symptoms() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/symptompsPage')
            .then(function ({ data }) {
                setInfo(data)
            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])

    return (
        <section>
            <div className="page-header">
                <div className="info">
                    <Title cls="info__title" title={info.title} />
                    <Subtitle cls="info__subtitle" title={info.subtitle} />
                    <Description cls="info__description" title={info.description} />
                </div>
            </div>
            <figure>
                <OverviewImage src={info.imagesrc} cls="card-img-top" />
            </figure>
        </section>
    )

}

export default Symptoms