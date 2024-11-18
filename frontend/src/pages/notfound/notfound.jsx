// Modules
import { NavLink } from "react-router-dom";

// Components
import Header from "../../components/header/header";


function NotFound() {
    return (
        <main id="notfound">
            <Header />

            <div className="notfound-elements">
                <h1>404</h1>
                <p>La page que vous recherchez n'est pas disponible!</p>
                <p>Retournez à la page d'<NavLink to='/'>accueil</NavLink>.</p>
            </div>
        </main>
    )
}

export default NotFound;