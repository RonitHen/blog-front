import {ContactForm} from "../components/contact_form"

export function Contact() {
    return(
        <div>
            <div className="flag-container"></div>
            <div className={"title-area"}>
                <div className="title-box">
                    <h3>Contact</h3>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}