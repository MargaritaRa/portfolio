import "./navbar.css"
import aus2 from '../../../public/image/aus2.jpg'
import contact1 from '../../../public/image/contact1.png'
import {Link} from 'react-scroll'


function Navbar(){
    return(
        <nav className="navbar">
            <img src={aus2} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuButton">
                <img src={contact1} alt="" className="destopMenuImg" />
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar