// Components
import Project from "../project/project.jsx";


function ProjectsList({ projects }) {
    return (
        <div className="projects-list">
            <div className="projects-list-header">
                <h2>Réalisations</h2>
            </div>

            <div className="projects-list-list">
                {projects.map(element => (
                    <Project id={element.id} title={element.title} category={element.category} image={element.images[0].imageURL}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectsList;