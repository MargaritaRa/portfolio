import { useState } from "react"
import "./navbar.css"
import logo from '../../../public/image/logo.png'
import contact1 from '../../../public/image/contact1.png'
import {Link} from 'react-scroll'
import menu from '../../../public/image/menu.png'




function Navbar(){

    const[showMenu, setShowMenu] = useState(false)

    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                {/* to is the id */}
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuButton" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
            <img src={contact1} alt="" className="destopMenuImg" />Contact Me</button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                {/* to is the id */}
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar