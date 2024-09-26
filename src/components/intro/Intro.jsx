import './intro.css'
import me from '/image/me.png'
import work from '/image/work.png'

function Intro (){
    return(
        <section id='intro'>
            <div className="intoContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Margarita</span><br />a Software Engineer </span>
                <p className="introPara">and recent graduate of Flatiron School's intensive bootcamp, where I mastered Python, JavaScript, and React through hands-on projects and team collaboration. My background spans software development, education, and travel management, where I’ve led complex projects, adapted to diverse cultures, and built strong relationships. I hold a dual degree in Mathematics Teacher Education and Psychology, giving me a unique edge in both problem-solving and communication. I’m passionate about merging my skills in tech, education, and cultural exchange to create meaningful, user-centric solutions that have a global impact. <br /></p>
            </div>
            <img src={me} alt="Profile" className='file' />
        </section>
    )
}
export default Intro