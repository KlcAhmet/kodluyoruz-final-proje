import Logo from "./Logo"
import HeaderLinks from "./HeaderLinks"
import ContactButton from "./ContactButton"

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-3">
                        <Logo />
                    </div>
                    <div className="col-12 col-sm-12 col-md-9">
                        <HeaderLinks />
                        <ContactButton />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header