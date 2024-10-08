import './portfolio.css'
import port1 from '/image/port1.png'
import port2 from '/image/port2.png'
import port3 from '/image/port3.png'
import port4 from '/image/port4.png'
import port5 from '/image/port5.png'
import port6 from '/image/port6.png'


function Portfolio (){
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="workDesc">I take pride in paying attention to to smallest detalesI take pride in paying attention to to smallest detalesI take pride in paying attention to to smallest detalesI take pride in paying attention to to smallest detalesI take pride in paying attention to to smallest detalesI take pride in paying attention to to smallest detalesI take pride in paying attention to to smallest detalesI take pride in paying attention to to smallest detalesI take pride in paying attention to to smallest detales</span>
            <div className="worksImgs">
                <img src={port1} alt="portflio1" className="worksImg" />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EHO-GfcauLc?si=FQOF1gI_HfSKkjHr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="worksImg"></iframe>
                <img src={port2} alt="portflio2" className="worksImg" />
                <img src={port3} alt="portflio3" className="worksImg" />
                <img src={port4} alt="portflio4" className="worksImg" />
                <img src={port5} alt="portflio5" className="worksImg" />
                <img src={port6} alt="portflio6" className="worksImg" />
            </div>
            <button className="worksBtn">See More</button>
        </section>
    )
}

export default Portfolio