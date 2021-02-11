import Logo from "./Logo"
import HeaderLinks from "./HeaderLinks"
import ContactButton from "./ContactButton"

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <Logo />
                    <HeaderLinks />
                </div>
                <ContactButton />
            </div>
        </header>
    )
}

export default Header