import './intro.css'
import me from '/image/me.png'
import SearchIcon from '@mui/icons-material/Search';

function Intro (){
    return(
        <section id='intro'>
            <div className="intoContent">
                <span className="introText">Hello,</span>
                <span className="introText">I'm Margarita !</span>
                <p className="introPara">I’m a recent graduate of Flatiron School's bootcamp, where I mastered Python, JavaScript, and React through hands-on projects and team collaboration. With a background in software development, education, and travel management, I combine technical skills and cultural insights to create meaningful, user-centric solutions.</p>
                <a href="https://www.linkedin.com/in/ramirezmargarita"><button className='callToActionLinkedin'><SearchIcon/>linkedin.com/in/ramirezmargarita</button></a>
            </div>
            <img src={me} alt="Profile" className='file' />
        </section>
    )
}
export default Intro