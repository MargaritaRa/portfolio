import './skills.css'
import star from '/image/star.png'
import done from '/image/done.png'
import bolt from '/image/bolt.png'

function Skills(){
    return(
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">As a recent graduate of the Flatiron School's intensive 15-week Software Engineering Bootcamp, I dedicated over 60 hours per week to mastering programming languages and frameworks such as Python, JavaScript, and React. This rigorous training involved building complex projects under tight deadlines, collaborating with peers, and tackling regular coding challenges to ensure a deep understanding of software development principles. <br/><br/>In my previous role as a Trip Manager at Contiki, I honed my problem-solving and communication skills by organizing and executing travel tours across five countries in Asia for groups of 30+ adults, achieving a 95% satisfaction rate on post-trip surveys. This role required adapting to diverse cultures, managing relationships with local suppliers, and resolving personal issues for travelers.<br/><br/>I hold a dual degree in Mathematics Teacher Education and Psychology from the University of Central Florida. This background provided me with the skills to teach, motivate, and engage students from various backgrounds.<br/><br/>I am passionate about travel, education, and cultural exchange, and I seek opportunities to combine these interests with my software engineering skills to contribute to the global community. My diverse experiences and commitment to continuous learning make me a well-rounded professional eager to make a significant impact in the tech industry.</span>
            
            <div className="skillBars">
                <div className="skillBar">
                    <img src={star} alt="star" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/Ux Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={done} alt="done" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={bolt} alt="bolt" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills