import plane from "../images/svg/plane-icon.svg";

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact-animation-wrapper">
                <div className="contact-animation-blob1"></div>
                <div className="contact-animation-blob2"></div>
                <div className="contact-animation-blob3"></div>
                <div className="contact-animation-blob4"></div>
                <div className="contact-animation-blob5"></div>
            </div>
            <div className="contact-form-wrapper">
                <h1 className="title">Contact</h1>
                <form className="contact-form">
                <div className="contact-form-email-wrapper">
                        <input
                            className="contact-form-input"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                        <hr />
                    </div>
                    <div className="contact-form-topic-wrapper">
                        <input
                            className="contact-form-input"
                            id="topic"
                            type="text"
                            placeholder="Subject"
                        />
                        <hr />
                    </div>
                    <div className="contact-form-message-wrapper">
                        <textarea
                            className="contact-form-text-area"
                            id="message"
                            placeholder="Your question or message"
                        ></textarea>
                        <hr />
                    </div>
                    <div className="contact-form-submit">
                        <img src={plane} alt="Plane"></img>
                        <span>Send</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
