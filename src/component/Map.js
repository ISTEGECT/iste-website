import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';
import './Map.css'

export default function Map() {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observerRefValue=domRef.current;
    observer.observe(observerRefValue);
    return () => observer.unobserve(observerRefValue);
  }, []);
  const [state, handleSubmit] = useForm("mwkjegaq");
  let valid = 1;
  const onClick = () => {
    let nameObj=document.getElementById("name");
    let emailObj=document.getElementById("email");
    let messageObj=document.getElementById("message");
    if(!(nameObj.checkValidity() & emailObj.checkValidity() & messageObj.checkValidity())){
      alert("Invalid entry");
      valid = 0;
    }
    setTimeout(function () {
      if (valid === 1) {
        if (state.succeeded) {
          alert("Message sent");
          nameObj.value = "";
          emailObj.value = "";
          messageObj.value = "";
        } else {
          alert("Failed!!! Try again");
        }
      }
    }, 1000);
  }

  return (
    <div class="contMain">
      <div className={`Map fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={domRef} id="contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.314923420987!2d76.22247131410091!3d10.554510792472325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7eee301ff400f%3A0x8851e3d8fc9c94f0!2sGovernment%20Engineering%20College%20-%20Thrissur%20(GECT)!5e0!3m2!1sen!2sin!4v1671185219481!5m2!1sen!2sin" height="380" style={{ border: 0, width: '80%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='GECT'></iframe>
      </div>
      <div className='formSec'>
        <div className='formContainer'>
          <div className='formHead'>
            <h1>Contact us</h1>
            <a href = "mailto:iste@gectcr.ac.in?subject=New enquiry from ISTE GECT website"><img className="contactIcon" src={mail} alt=""></img></a>
            <a href="tel:+917306578722"><img className="contactIcon" src={phone} alt=""></img></a>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Your name
            </label>
            <input
              id="name"
              type="name"
              name="name"
              required
            />
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting} onClick={onClick}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
