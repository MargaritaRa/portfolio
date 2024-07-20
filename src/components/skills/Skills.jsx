import './skills.css'
import star from '../../../public/image/star.png'
import done from '../../../public/image/done.png'
import bolt from '../../../public/image/bolt.png'

function Skills(){
    return(
        <section className="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate Software Enginneer with ecperience in python, React, and Javascript. As a recent graduate of the Flatiron School's intensive 15-week Software Engineering Bootcamp, I dedicated over 60 hours per week to mastering programming languages and frameworks such as Python, JavaScript, and React. This rigorous training involved building complex projects under tight deadlines, collaborating with peers, and tackling regular coding challenges to ensure a deep understanding of software development principles.</span>
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