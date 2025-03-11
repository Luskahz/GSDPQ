import { Link } from "react-router-dom";
import '../styles/components/header/headerClassic.css';
import '../styles/components/header/headerModalClassic.css';
import profileSvgDark from "../assets/padraoProfileDark.svg";

export default function Header() {
    return (
        <header>
            <div id="logo">
                <Link to="/">
                    <img src={profileSvgDark} alt="" />
                </Link>
            </div>
            <div className="wrapper">
                <div>
                    
                </div>
                <nav>
                    <Link to="/historicogsd">GSDPQs</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/">Home</Link>
                </nav>
            </div>
            
            <Link id="profile" to="/profile">
                <img src={profileSvgDark} alt="Ícone do perfil" />
            </Link> 
        </header>
    );
}
