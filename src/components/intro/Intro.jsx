import './intro.css'
import me from '/image/me.png'
import work from '/image/work.png'
import { Link } from 'react-scroll'

function Intro (){
    return(
        <section id='intro'>
            <div className="intoContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Margarita</span><br />Software Engineer </span>
                <p className="introPara">I am a skilled software engineer with experience in creating <br />fullstack development projects</p>
                <Link><button className="btn"><img src={work} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
            </div>
            <img src={me} alt="Profile" className='file' />
        </section>
    )
}
export default Intro