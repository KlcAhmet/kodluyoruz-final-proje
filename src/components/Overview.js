import React, { useState, useEffect } from "react"
import axios from "axios"
import { Title, Subtitle, Description, OverviewImage, CommonButton } from "../componentmap/maincomponents"
import '../css/Overview.css'
import { maplink } from '../componentmap/dataBaseMap.js'

function Overview() {
    const [infoLink, setInfoLink] = useState([])

    useEffect(() => {
        axios.get(`${maplink}/indexPage`)
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
        <div className="reverse-info">{infoLink}</div>
    )
}


function resultHTML(i, title, subtitle, description, imagesrc, buttontitle) {
    return (
        <section key={i}>
            <div className="content row align-items-center">
                <div className="info col-12 col-md-6">
                    <Title cls="info__title" title={title} />
                    <Subtitle cls="info__subtitle" title={subtitle} />
                    <Description cls="info__desc" title={description} />
                    <CommonButton link="#" cls="common-button common-button--dayBackGround" text={buttontitle} />
                </div>
                <div className="content__img col-12 col-md-6">
                    <figure>
                        <OverviewImage src={imagesrc} />
                    </figure>
                </div>
            </div>
        </section>
    )
}




export default Overview