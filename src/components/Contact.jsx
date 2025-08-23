import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(`✅ Message sent successfully!`);
          form.current.reset();
        },
        (error) => {
          alert(`❌ Failed to send message. Please try again.${error}`);
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <span>Location</span>
                </div>
                <p>Lahore, Pakistan</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <span>Email</span>
                </div>
                <p>abdulwahab.sengineer@gmail.com</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <span>Education</span>
                </div>
                <p>University of Gujrat</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <span>Mobile Number</span>
                </div>
                <p>03093573172</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <span>Languages</span>
                </div>
                <p>English, Urdu & Punjabi</p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                <a
                  href="https://www.linkedin.com/in/abdul-wahab-aw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="http://x.com/mrabdulwahabaw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/abdul-wahab619/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.youtube.com/@abdul-wahab-aw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="right-contact">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
              id="contactForm"
            >
              <div className="input-control i-c-2">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="NAME"
                />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="EMAIL"
                />
              </div>
              <div className="input-control">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="SUBJECT"
                />
              </div>
              <div className="input-control">
                <textarea
                  name="message"
                  rows="8"
                  required
                  placeholder="MESSAGE HERE..."
                ></textarea>
              </div>
              <div className="submit-btn">
                <a
                  href="#"
                  className="main-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contactForm").requestSubmit();
                  }}
                >
                  <span className="btn-text">Submit</span>
                  <span className="btn-icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
