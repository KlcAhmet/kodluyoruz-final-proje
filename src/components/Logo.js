import logo from "../img/logo.svg"

function Logo() {

    return (
        <div className="logo">
            <figure>
                <img src={logo} className="img-fluid" alt="logo.svg" />
            </figure>
        </div>
    )
}

export default Logo