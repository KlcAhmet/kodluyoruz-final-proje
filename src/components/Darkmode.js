import '../css/Darkmode.css'
import { selection } from '../js/darkmode.js'

function Darkmode() {
    return (
        <div className="darkmode col-12">
            <input onClick={selection} className="darkmode__checkbox" type="checkbox" id="s3" />
            <label className="slider-v2" htmlFor="s3"></label>
        </div>
    )
}


export default Darkmode