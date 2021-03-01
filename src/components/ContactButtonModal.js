import { CommonButton } from "../componentmap/maincomponents"
import '../css/ContactButtonModal.css'

function ContactButtonModal() {
    return (
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5 className="modal-body__title">Have Question in mind?</h5>
                        <span className="modal-body__subtitle">Let us help you</span>
                        <div className="modal-body__mail-block row">
                            <input className="modal-body__mail-block__input" type="email" placeholder="snmonydemo@gmail.com" />
                            <CommonButton link="#" cls="common-button common-button--dayBackGround modal-body__mail-block__common-button" text="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactButtonModal