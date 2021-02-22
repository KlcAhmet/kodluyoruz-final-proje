import React, { useState, useEffect } from "react"
import axios from "axios"
import { Title, Subtitle, Description, OverviewImage, CardTitle } from "../componentmap/maincomponents"
import '../css/Contagion.css'

function Contagion() {
    const [info, setInfo] = useState([])
    const [cards, setCard] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3004/contagionPage')
            .then(function ({ data }) {
                const result = []
                setInfo(data)
                data.cards.forEach(({ title, description, imagesrc }, i) => {
                    result.push(resultCard(i, title, description, imagesrc))
                });
                setCard(result)
            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])
    return (
        <>
            <section>
                <div className="page-header">
                    <div className="info">
                        <Title cls="info__title" title={info.title} />
                        <Subtitle cls="info__subtitle" title={info.subtitle} />
                        <Description cls="info__description" title={info.description} />
                    </div>
                </div>
            </section>
            <section>
                <div className="row col-12 d-flex justify-content-center">
                    {cards}
                </div>
            </section>
        </>
    )
}

function resultCard(i, title, description, imagesrc) {
    return (
        <div key={i} className="card" style={{ width: '18rem' }}>
            <figure>
                <OverviewImage src={imagesrc} cls="card-img-top" />
            </figure>
            <div className="card-body">
                <CardTitle cls="card-body__title" title={title} />
                <Description cls="card-body__desc" title={description} />
            </div>
        </div>
    )
}

export default Contagion