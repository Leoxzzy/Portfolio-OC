// Modules
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <span>Portfolio</span>

                <ul>
                    <li><NavLink to='/'>Accueil</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;