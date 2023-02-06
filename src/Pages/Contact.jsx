import { FaPhoneVolume } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_bpf8f45", "template_836w5hc", form.current, "9lNVEL7r7eS2ZiijU").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section>
      <div className="container Contact-page py-5" id="contact">
        <h1>
          Contact <span>Us</span>
        </h1>
        <div className="row">
          <div className="col-md-5 address-card d-flex justify-content-center">
            <div className="card mb-3 d-flex flex-wrap justify-content-center align-items-center">
              <div>
                <icon>
                  <HiLocationMarker />
                </icon>
                <h6>Address</h6>
                <p>Kancheepuram, TamilNadu</p>
              </div>

              <div>
                <icon>
                  <FaPhoneVolume />
                </icon>
                <h6>Phone</h6>
                <p>+91-9952638437</p>
              </div>
              <div>
                <icon>
                  <HiOutlineMail />
                </icon>
                <h6>E-Mail</h6>
                <p>dharanfsd@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 contacting-form">
            <h3 className="contact-form-topic">Get in Touch</h3>
            <div>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label className="form-label"></label>
                <input type="Text" className="form-control mb-3" placeholder="Name" name="user_name" />
                <div className="d-flex">
                  <label className="form-label"></label>
                  <input type="tel" className="form-control mb-3 me-4" placeholder="Phone Number" name="phone" />
                  <label className="form-label"></label>
                  <input type="email" className="form-control mb-3" placeholder="E-Mail" name="user_email" />
                </div>
                <div class="mb-3">
                  <textarea className="form-control" placeholder="Message..." name="message"></textarea>
                  <label for="floatingTextarea"></label>
                </div>
                <button type="submit" value="Send">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
