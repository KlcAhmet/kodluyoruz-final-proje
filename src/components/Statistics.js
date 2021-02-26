import React, { useState, useEffect } from "react"
import axios from "axios"
import { Description, OverviewImage, CardTitle } from "../componentmap/maincomponents"
import '../css/Statistics.css'

function Statistics() {
    const [map, setMap] = useState()
    const [arrows, setArrows] = useState([])
    const [stats, setStats] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/istatistic')
            .then(function ({ data }) {
                const result = []
                setArrows(data.arrows)
                setMap(data.map)
                data.flag.forEach(({ id, name, imagesrc }) => {
                    result.push(flags(id, name, imagesrc, data.arrows.upArrow))
                });
                setStats(result)
            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])

    return (
        <section>
            <div className="statistics row">
                <div className="col-12 col-xl-8">
                    <figure>
                        <OverviewImage src={map} />
                    </figure>
                </div>
                <div id="stats-table" className="stats-table stats-table--background col-12 col-md-6 col-xl-4">
                    <section>
                        <div className="information row">
                            <div className="align-self-center col-8">
                                <CardTitle cls="information__title" title="Live Reports" />
                            </div>
                            <div className="col-4">
                                <figure>
                                    <OverviewImage cls="information__img" src={arrows.mapStatArrow} />
                                </figure>
                            </div>
                        </div>
                        <section>
                            <div className="stats col-12">
                                {stats}
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </section >
    )
}


function flags(id, name, imagesrc, arrow) {
    return (
        <div key={id} className="row">
            <div className="col-2">
                <figure>
                    <OverviewImage cls="stats__flag" src={imagesrc} />
                </figure>
            </div>
            <div className="col-4">
                <CardTitle cls="stats__country" title={name} />
            </div>
            <div className="col-4">
                <Description cls="stats__rate" title="0000" />
            </div>
            <div className="col-2">
                <figure>
                    <OverviewImage cls="stats__arrow" src={arrow} />
                </figure>
            </div>
        </div>
    )
}


export default Statistics