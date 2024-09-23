import { useRef } from 'react'
import { Link } from 'react-router-dom'

import './contact.css'
import CG from '/image/CG.png'
import synchrony from '/image/synchrony.png'
import ocps from '/image/ocps.png'
import contiki from '/image/contiki.png'
import yout from '/image/yout.png'
import insta from '/image/insta.png'
import tweet from '/image/tweet.png'
import face from '/image/face.png'
import emailjs from '@emailjs/browser'




function Contact(){

    const form = useRef();

    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_sxe018q', 'template_coxdn6h', form.current, {
            publicKey: 'NUGU2jtM-PZWkNsTu',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent! ')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <section id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Resume</h1>
                <p className="clientDesc">I have had the opertunity to work with a diverse groupe of companies. Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                  <img  className="clientImg" />
                  <div className="skillBar">
                    <img src={contiki} alt="contiki" className="clientImgs" />
                    <div className="skillBarText">
                        <h4>Contiki</h4>
                        <h5>August 2023 - Present</h5>
                        <ul>
                          <li>
                            Organize and execute 5 travel tours for groups of 30+ adults across 5 countries in Asia; received 95% on post trip surveys.
                          </li>
                        </ul>
                        <Link to="/resume">
                          <button type='button' className='submitBtn'>Click here for the full Resume</button>
                        </Link>
                    </div>
                </div>
                  <img src={synchrony} alt="synchrony" className="clientImg" />
                  <img src={ocps} alt="ocps" className="clientImg" />
                  <img src={CG} alt="CG" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work oppertunities.
                </span>
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name="your_name"/>
                    <input type="email" className="email" placeholder='Your Email' name="your_email" />
                    <textarea name="message" rows="5" placeholder='Your message' className='msg'></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={face} alt="Facebook" className="link" />
                        <img src={yout} alt="Youtube" className="link" />
                        <img src={insta} alt="Instagram" className="link" />
                        <img src={tweet} alt="Twitter" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact