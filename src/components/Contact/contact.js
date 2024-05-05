import React, { useRef } from 'react';
import linkedinLogo from '../../assets/linkedin-logo.png';
import youtubeLogo from '../../assets/youtube-logo.png';
import githubLogo from '../../assets/github.png';
import emailjs from '@emailjs/browser';
import './contact.css';

const logoListItems = [
  {
    imageSrc: linkedinLogo,
    altText: "Logo of LinkedIn",
    linkUrl: "https://www.linkedin.com/in/edmyr-batiancila/",
  },
  {
    imageSrc: youtubeLogo,
    altText: "Logo of Youtube",
    linkUrl: "https://youtube.com/@edmyrbatiancila5469?si=p7aG43rj4wAAIrH8",
  },
  {
    imageSrc: githubLogo,
    altText: "Logo of GitHub",
    linkUrl: "https://github.com/edmyrbatiancila",
  },
];

const Contact = () => {
  const handleLogoClick = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9tsvboa",
        "template_5oebv39",
        form.current,
        "fJ3rShuNH0wHqioIp"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppurtunities.
        </span>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            {logoListItems.map((item, index) => (
              <img
                src={item.imageSrc}
                alt={item.altText}
                className="link"
                onClick={() => handleLogoClick(item.linkUrl)}
              />
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
