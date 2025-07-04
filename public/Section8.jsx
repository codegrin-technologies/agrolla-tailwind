"use-client";
import "@/CSS/Section8.css";
export default function Section8() {
  return (
    <>
      <div className="section8">
        <h1>
          Get In <span style={{ color: "#2E7D32" }}>Touch</span>
        </h1>
        <h5>
          Have questions about our services or products? Contact us today and
          our team will be happy to assist you.
        </h5>
        <div className="sec8-1">
          <div className="form">
            <form action="">
              {" "}
              <br />
              <label htmlFor="">Your Name</label> <br />
              <input type="text" placeholder="Enter Your name" /> <br />
              <br />
              <label htmlFor="">Email Address</label> <br />
              <input type="text" placeholder="Enter Your email" /> <br />
              <br />
              <label htmlFor="">Phone Number</label> <br />
              <input type="text" placeholder="Enter Your phone number " />
              <br />
              <br />
              <label htmlFor="">Service Interested In</label> <br />
              <select name="" id="">
                <option value="">Select a services</option>
                <option value="">Service1</option>
                <option value="">Service2</option>
              </select>
              <br />
              <br />
              <label htmlFor="">Your Message</label>
              <textarea
                name=""
                id=""
                placeholder="Enter your message"
              ></textarea>
              <br />
              <br />
              <input
                type="checkbox"
                placeholder="Enter Your phone number "
                id="cb1"
              />
              <label htmlFor="">I agree to the terms and privacy policy</label>{" "}
              <br />
              <button className="send">Send Message</button>
            </form>
          </div>
          <div className="right">
            <div className="address">
              <p className="info">Contact Information</p>
              <div className="contact1">
                <img src="/location.svg" alt="" />
                <p className="locate">Our Location</p>
                <p className="infoName">
                  BM Square-1, Rajlaxmi Park, Junagadh, Gujarat - 362001
                </p>
              </div>
              <div className="contact1">
                <img src="/call.svg" alt="" />
                <p className="locate">Phone Number</p>
                <p className="infoName">
                  +91 9977333388 <br />
                  +91 9977333388
                </p>
              </div>
              <div className="contact1">
                <img src="/mail.svg" alt="" />
                <p className="locate">Email Address</p>
                <p className="infoName">
                  info@agrolla.in <br />
                  support@agrolla.in
                </p>
              </div>
              <div className="contact1">
                <img src="/time.svg" alt="" />
                <p className="locate">Working Hours</p>
                <p className="infoName">
                  Monday - Friday: 9:00 AM - 6:00 PM Saturday: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.679080469446!2d70.5131841!3d21.6351962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39581d483da8702f%3A0x45a9b999ee560a5d!2sAgrolla%20Impex!5e0!3m2!1sen!2sin!4v1719151673420!5m2!1sen!2sin"
                width="720px"
                height="256px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
