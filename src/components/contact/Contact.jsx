import './contact.css'
import CG from '../../../public/image/CG.png'
import synchrony from '../../../public/image/synchrony.png'
import ocps from '../../../public/image/ocps.png'
import contiki from '../../../public/image/contiki.png'


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

            </div>
        </section>
    );
}

export default Contact