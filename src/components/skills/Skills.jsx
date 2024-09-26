import './skills.css'

function Skills(){
    return(
        <section id="skills">
            <img src="/image/meme.png" alt='Me' className="skillBarImg"/>
            <span className="skillTitlee">Portfolio</span>
            <span className="skillTitlehollow">Portfolio</span>
            <span className="skillTitlehollow">Portfolio</span>
            <span className="skillTitlehollow">Portfolio</span>
            <div className='socialMedia'>
                <p>IG: @margarita.Tales</p>
                <p>LI:/ramirezmargarita</p>
                <p>Medium:/margaritaintech</p>
            </div>
            <div className='statment'>
            🌘I love art and anything related to travel. I approach problems in a rational pragmatic way and seek the simplest, most functional solution possible. 🌙
            </div>
            <button className="scrollButton">Scroll down </button>
        </section>
    )
}

export default Skills