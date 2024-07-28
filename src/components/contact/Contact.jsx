import './contact.css'
import CG from '../../../public/image/CG.png'
import synchrony from '../../../public/image/synchrony.png'
import ocps from '../../../public/image/ocps.png'
import contiki from '../../../public/image/contiki.png'
import yout from '../../../public/image/yout.png'
import insta from '../../../public/image/insta.png'
import tweet from '../../../public/image/tweet.png'
import face from '../../../public/image/face.png'



function Contact(){
    return(
        <section id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">I have had the opertunity to work with a diverse groupe of companies. Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={CG} alt="CG" className="clientImg" />
                    <img src={synchrony} alt="synchrony" className="clientImg" />
                    <img src={ocps} alt="ocps" className="clientImg" />
                    <img src={contiki} alt="contiki" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work oppertunities.
                </span>
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder='Your Name'/>
                    <input type="email" className="email" placeholder='Your Email' />
                    <textarea name="message" rows="5" placeholder='Your message' className='msg'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
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