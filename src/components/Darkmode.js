import '../css/Darkmode.css'

function Darkmode() {

    return (
        <div className="darkmode col-12">
            <input onClick={teest} className="darkmode__checkbox" type="checkbox" id="s3" />
            <label className="slider-v2" htmlFor="s3"></label>
        </div>
    )
}


function teest() {
    const aa = document.getElementById("s3")
    console.dir(aa)
}

export default Darkmode