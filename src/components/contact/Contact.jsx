import { useRef } from 'react'
import './contact.css'
import CG from '../../../public/image/CG.png'
import synchrony from '../../../public/image/synchrony.png'
import ocps from '../../../public/image/ocps.png'
import contiki from '../../../public/image/contiki.png'
import yout from '../../../public/image/yout.png'
import insta from '../../../public/image/insta.png'
import tweet from '../../../public/image/tweet.png'
import face from '../../../public/image/face.png'
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
                          <li>
                            Leveraged problem-solving and communication skills to execute and alter travel arrangements as needed, often with less than 24hrs notice, working closely with local suppliers, hotels, restaurants, local guides and trip drivers from diverse countries and cultures.
                          </li>
                          <li>
                            Guided travelers between cities, highlighting the best attractions and experiences in each location, managing bookings and schedules, and managed and resolved personal issues, including lost items, injuries, and conflicts of personalities.
                          </li>
                          <li>
                            Implemented personalized adjustments based on feedback from travelers and manager, resulting in a 20% increase in overall traveler satisfaction ratings. Received recognition from head office for exceptional customer service, including multiple love letters from travelers highlighting their favorite moments of the trip.
                          </li>
                        </ul>
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