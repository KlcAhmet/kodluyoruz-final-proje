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
                <div className="col-12 col-xl-4">
                    <section>
                        <div className="row col-12">
                            <div className="col-6">
                                <CardTitle cls="" title="Live Reports" />
                            </div>
                            <div className="col-6">
                                <figure>
                                    <OverviewImage src={arrows.mapStatArrow} />
                                </figure>
                            </div>
                        </div>
                        <section>
                            {stats}
                        </section>
                    </section>
                </div>
            </div>
        </section >
    )
}


function flags(id, name, imagesrc, arrow) {
    return (
        <div key={id} className="stats row col-12">
            <div className="flag col-2">
                <OverviewImage cls="" src={imagesrc} />
            </div>
            <div className="country col-4">
                <CardTitle cls="" title={name} />
            </div>
            <div className="rate col-4">
                <Description cls="" title="0000" />
            </div>
            <div className="arrow col-2">
                <OverviewImage src={arrow} cls="" />
            </div>
        </div>
    )
}


export default Statistics