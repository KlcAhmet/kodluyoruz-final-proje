import ContactButtonModal from "./ContactButtonModal"

function ContactButton() {
    return (
        <div className="contact">
            <button type="button" className="contact__btn" data-toggle="modal" data-target="#exampleModalCenter">Contact</button>
            <ContactButtonModal />
        </div>

    )
}

export default ContactButton