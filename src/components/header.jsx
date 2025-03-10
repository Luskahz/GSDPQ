import { Link } from "react-router-dom"
import '../styles/components/header.css';
import profileSvgDark from "../assets/padraoProfileDark.svg"


export default function Header(){
    return(
        <header>
            <div id="logo">
            </div>
            <div className="wrapper">
                <div>

                </div>
                <nav>
                    <Link to="/HistoricoGsd">GSDPQs</Link>
                    <Link to="/Dashboard">Dashboard</Link>
                    <Link to="/">Home</Link>
                </nav>
            </div>
            
            <Link id="profile" to="/profile">
                <img src={profileSvgDark} alt="" />
            </Link> 
        </header>
    );
}
