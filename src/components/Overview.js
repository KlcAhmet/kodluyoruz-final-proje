import { NavLink } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"

function Overview() {

    const [infoLink, setInfoLink] = useState([])
    const result = []

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
        <div key={i}>
            {title}
        </div>
    )
}




export default Overview