import React, { useState, useEffect } from "react"
import axios from "axios"
import { OverviewImage } from "../componentmap/maincomponents"

function FooterLogo() {
    const [footerLink, setFooterLink] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/footerLinks')
            .then(function ({ data }) {
                console.log(data)
                const result = []
                data.forEach(({ id, imagesrc, link }) => {
                    const temp = <a className="" key={id} href={link} target="_blank"><OverviewImage cls="" src={imagesrc} /></a>
                    result.push(temp)
                });
                setFooterLink(result)
            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])

    return (
        <>
            {footerLink}
        </>
    )
}

export default FooterLogo