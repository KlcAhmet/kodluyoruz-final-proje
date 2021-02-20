import React, { useState, useEffect } from "react"
import axios from "axios"
import Logo from "./Logo"
import HeaderLinks from "./HeaderLinks"
import { Description } from "../componentmap/maincomponents"

function Footer() {

    const [footerLink, setFooterLink] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/footerLinks')
            .then(function ({ data }) {
                console.log(data)
                const result = []
                /* data.forEach(({ title, subtitle, description, imagesrc, buttontitle }, i) => {
                    result.push(resultHTML(i, title, subtitle, description, imagesrc, buttontitle))
                });
                setInfoLink(result) */
            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-3 align-self-center">
                        <Logo />
                    </div>
                    <div className="col-12 col-sm-6 align-self-center">
                        <HeaderLinks />
                    </div>
                    <div className="col-12 col-sm-3 align-self-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, et ducimus. Fuga, illo ut temporibus eveniet perferendis laboriosam tenetur eius iste a aperiam? Aliquid neque odit quod illo qui? Accusantium?
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <small>Bu web sitesinin <a href="https://github.com/KlcAhmet/kodluyoruz-final-proje" target="_blank" rel="noopener noreferrer">kaynak kodlarına</a> Github üzerinden ulaşabilirsiniz ❤️</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer