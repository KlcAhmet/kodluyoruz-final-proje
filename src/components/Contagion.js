import React, { useState, useEffect } from "react"
import axios from "axios"
import { Title, Subtitle, Description, OverviewImage, CardTitle } from "../componentmap/maincomponents"

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
    console.log(cards)
    return (
        <section>
            <div className="info">
                <Title cls="info__title" title={info.title} />
                <Subtitle cls="info__subtitle" title={info.subtitle} />
                <Description cls="info__description" title={info.description} />
            </div>
            <div>
                {cards}
            </div>
        </section>
    )
}

function resultCard(i, title, description, imagesrc) {
    return (
        <div key={i} className="card" style={{ width: '18rem' }}>
            <OverviewImage src={imagesrc} cls="card-img-top" />
            <div className="card-body">
                <CardTitle cls="card__title" title={title} />
                <Description cls="card__desc" title={description} />
            </div>
        </div>
    )
}

export default Contagion