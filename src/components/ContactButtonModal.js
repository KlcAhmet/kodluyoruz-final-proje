import { CommonButton } from "../componentmap/maincomponents"

function ContactButtonModal() {
    return (
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h5 className="modal-body__title">Have Question in mind?</h5>
                        <span className="modal-body__subtitle">Let us help you</span>
                        <div className="modal-body__mail-block">
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