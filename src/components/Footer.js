import { Logo, HeaderLinks, FooterLogo } from "../componentmap/maincomponents"
import '../css/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer container">
                <div className="row">
                    <div className="col-12 col-sm-3 align-self-center">
                        <Logo />
                    </div>
                    <div className="col-12 col-sm-6 align-self-center">
                        <HeaderLinks />
                    </div>
                    <div className="socialmedia col-12 col-sm-3 align-self-center">
                        <FooterLogo />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <small>Bu web sitesinin <a href="https://github.com/KlcAhmet" target="_blank">github.com/KlcAhmet----</a> <a href="https://github.com/KlcAhmet/kodluyoruz-final-proje" target="_blank" rel="noopener noreferrer">kaynak kodlarına</a> Github üzerinden ulaşabilirsiniz ❤️</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer