import { Logo, HeaderLinks, ContactButton } from "../componentmap/maincomponents"
import '../css/Header.css'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header row align-items-center">
                    <div className="col-12 col-sm-12 col-lg-3">
                        <Logo />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-8">
                        <HeaderLinks />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-1">
                        <ContactButton />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header