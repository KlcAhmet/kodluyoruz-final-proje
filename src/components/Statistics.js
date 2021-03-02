import React, { useState, useEffect } from "react"
import axios from "axios"
import { Description, OverviewImage, CardTitle } from "../componentmap/maincomponents"
import '../css/Statistics.css'
import { maplink } from '../componentmap/dataBaseMap.js'

function Statistics() {
    const [map, setMap] = useState()
    const [arrows, setArrows] = useState([])
    const [stats, setStats] = useState([])

    useEffect(() => {
        axios.get(`${maplink}/istatistic`)
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
        axios.get(`${maplink}/countries`)
            .then(function (data) {
                data.data.forEach((element, i) => {
                    setTimeout(() => {
                        axios.request(element).then(function (response) {
                            document.getElementById("stats").children[i].children[2].children[0].textContent = response.data[0].confirmed
                        }).catch(function (error) {
                            console.error(error);
                        });
                    }, i * 2000);
                });
            })
            .catch(function (error) {
                console.log(error);
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
                            <div id="stats" className="stats col-12">
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
                <Description cls="stats__rate" title="Loading..." />
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