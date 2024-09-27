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

import PetsIcon from '@mui/icons-material/Pets';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

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
      <section id="contactPage">
      <div id="clients">
        <h2 className="contactPageTitle">Companies I've Worked With</h2>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies. Some of the notable companies include:
        </p>
        <div className="clientImgs">
          <img src={contiki} alt="Contiki" className="clientImg" />
          <img src={synchrony} alt="Synchrony" className="clientImg" />
          <img src={ocps} alt="OCPS" className="clientImg" />
          <img src={CG} alt="CG" className="clientImg" />
        </div>
      </div>

      <div className="education-experience-container">
        <table className="education">
            <caption className="educationClass">Education</caption>
            <tbody>
                <tr className="schools">
                    <td className='year'>🌙 2024:</td>
                    <td className="school">Flatiron</td>
                    <td className="degree">Software Engineering</td>
                </tr>
                <tr>
                    <td className='year'>🌙 2013-2016:</td>
                    <td className="school">UCF</td>
                    <td className="degree">Mathematics Education</td>
                </tr>
                <tr className="schools">
                    <td className='year'>🌙 2011-2013:</td>
                    <td className="school">Valencia</td>
                    <td className="degree">AA General</td>
                </tr>
            </tbody>
        </table>

        <table className="experience">
            <caption className="experienceTitle">Experience</caption>
            <tbody>
                <tr className="locations">
                    <td className='year'>🌙 2023-2024:</td>
                    <td className="work">Contiki</td>
                    <td className="position">Tour Manager in Japan</td>
                </tr>
                <tr>
                    <td className='year'>🌙 2019-2023:</td>
                    <td className="work">Synchrony</td>
                    <td className="position">Supervisor in Recovery</td>
                </tr>
                <tr className="works">
                    <td className='year'>🌙 2018-2019:</td>
                    <td className="work">OCPS</td>
                    <td className="position">Math Teacher</td>
                </tr>
                <tr className="works">
                    <td className='year'>🌙 2016-2018:</td>
                    <td className="work">C&G Auto Center</td>
                    <td className="position">Bookkeeper</td>
                </tr>
            </tbody>
        </table>
        <div className="tags-container">
              <button className='tags'>#Creative</button>
              <button className='tags' >#Traveler</button>
              <button className='tags'>#Communication</button>
              <button className='tags'>#Adaptable</button>
              <button className='tags'>#DetailOriented</button>
        </div>
    </div>

    <div className="technicalSkills">
        <table className="technicalSkillsTable">
            <caption className="skillsTitle">Technical Skills</caption>
            <tbody>
                <tr>
                    <th>Coding Skills</th>
                    <td>Basic knowledge of:</td>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>CSS</td>
                    <td>JavaScript</td>
                    <td>Python</td>
                    <td>SQL</td>
                </tr>
            </tbody>
        </table>

        <div className="tags-container">
            <button className="tags">Packaging</button>
            <button className="tags">UI/UX Design</button>
            <button className="tags">User Research</button>
            <button className="tags">Virtual Design</button>
        </div>
    </div>

    <div id="me">
        <table className="activities">
            <caption>Projects</caption>
            <tbody>
                <tr>
                    <td>🌙 2024:</td>
                    <td>Stickers</td>
                    <td>Ecommerce</td>
                </tr>
                <tr>
                    <td>🌙 2024:</td>
                    <td>Tetris</td>
                    <td>Pygame</td>
                </tr>
                <tr>
                    <td>🌙 2024:</td>
                    <td>World Traveler</td>
                    <td>Fullstack Blog</td>
                </tr>
            </tbody>
        </table>

        <table className="languages">
            <caption>Languages</caption>
            <tbody>
                <tr>
                    <th>English</th>
                    <th>Spanish</th>
                    <th>French</th>
                </tr>
                <tr>
                    <td>Native</td>
                    <td>Native</td>
                    <td>Beginner</td>
                </tr>
            </tbody>
        </table>

        <table className="hobbies">
            <caption>Hobbies & Interests</caption>
            <tbody>
                <tr className="icons">
                    <td><AirplanemodeActiveIcon /></td>
                    <td><LibraryBooksIcon /></td>
                    <td><FamilyRestroomIcon /></td>
                    <td><PetsIcon /></td>
                </tr>
                <tr className="iconsName">
                    <td>Traveling</td>
                    <td>Reading</td>
                    <td>Family</td>
                    <td>Dog mom</td>
                </tr>
            </tbody>
        </table>
    </div>



      <div id="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={face} alt="Facebook" className="link" />
            <img src={yout} alt="YouTube" className="link" />
            <img src={insta} alt="Instagram" className="link" />
            <img src={tweet} alt="Twitter" className="link" />
          </div>
        </form>
      </div>
    </section>
    );
}

export default Contact