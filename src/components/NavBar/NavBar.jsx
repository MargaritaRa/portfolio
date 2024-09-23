import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll'
import "./navbar.css"
import logo from '/image/logo.png'
import contact1 from '/image/contact1.png'
import menu from '/image/menu.png'




function Navbar(){

    const[showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
        window.scrollTo(0, 0);
      };
    

    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}/>
            
            <div className="desktopMenu">
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>

            <button className="desktopMenuButton" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                <img src={contact1} alt="" className="destopMenuImg" />
                Contact Me
            </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
            
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
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