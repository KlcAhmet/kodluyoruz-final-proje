import React, { useState, useEffect } from "react"
import axios from "axios"
import { Title, Subtitle, Description, OverviewImage, CommonButton } from "../componentmap/headercomponents"

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
                    <Title cls="info__title" title={title} />
                    <Subtitle cls="info__desc__subtitle" title={subtitle} />
                    <Description cls="info__desc__description" title={description} />
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