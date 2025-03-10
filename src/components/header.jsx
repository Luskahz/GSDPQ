import { Link } from "react-router-dom";
import '../styles/components/header.css';
import profileSvgDark from "../assets/padraoProfileDark.svg";

export default function Header() {
    return (
        <header>
            <div id="logo"></div>
            <div className="wrapper">
                <div>

                </div>
                <nav>
                    <Link to="/historicogsd">GSDPQs</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/">Home</Link>
                    <Link to="/teste"> testemodal</Link>
                </nav>
            </div>
            
            <Link id="profile" to="/profile">
                <img src={profileSvgDark} alt="Ícone do perfil" />
            </Link> 
        </header>
    );
}
