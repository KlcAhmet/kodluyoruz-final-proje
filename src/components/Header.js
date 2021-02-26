import { Logo, HeaderLinks, ContactButton, Darkmode } from "../componentmap/maincomponents"
import '../css/Header.css'

function Header() {
    return (
        <header>
            <div id="ustdiv" className="renklidiv renklidiv--renkli"></div>
            <div className="container">
                <div className="header row col-12 align-items-center">
                    <div className="col-12 col-sm-12 col-lg-3">
                        <Logo />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-7">
                        <HeaderLinks />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-2">
                        <ContactButton />
                    </div>
                    <Darkmode />
                </div>
            </div>
        </header>
    )
}

export default Header