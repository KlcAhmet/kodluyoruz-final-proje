import { NavLink } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { maplink } from '../componentmap/dataBaseMap.js'


function HeaderLinks() {
    const [headerLinks, setHeaderLinks] = useState([])

    useEffect(() => {
        axios.get(`${maplink}/headerLinks`)
            .then(function ({ data }) {
                const resultNav = []
                data.forEach(({ id, title, link }) => {
                    resultNav.push(<NavLink className="navlink__link" exact to={link} key={id}>{title}</NavLink>)
                });
                setHeaderLinks(resultNav)
            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])


    return (
        <nav className="navlink">
            {headerLinks}
        </nav>
    )
}

export default HeaderLinks