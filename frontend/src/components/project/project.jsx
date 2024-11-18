// Modules
import { NavLink } from "react-router-dom";

function Project({ id, title, category, image }) {
    return (
        <NavLink to={`/${id}`} className='project-card' key={id}>
            <div className="project">
                <div className="project-image-container">
                    <img src={image} alt="Couverture de projet" />
                </div>

                <div className="project-info">
                    <h3>{title}</h3>
                    <span>{category}</span>
                </div>
            </div>
        </NavLink>
    );
}

export default Project;