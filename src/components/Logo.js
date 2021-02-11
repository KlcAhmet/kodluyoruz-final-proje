import logo from "../img/logo.svg"

function Logo() {

    return (
        <div className="logo">
            <figure>
                <a href="/"><img src={logo} className="logo__img img-fluid" alt="logo.svg" /></a>
            </figure>
        </div>
    )
}

export default Logo