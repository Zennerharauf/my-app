// Projects.tsx
import "../style/projects.css";

function Projects() {
    return (
        <div id="projects" className="projects-container">
            <h2 className="projects-title">My Projects</h2>
            <p className="projects-description">
            These are projects I have worked on and some that I am still actively developing. They showcase my passion for web development and my continuous plans for growth and learning in the field.
            </p>
            <div className="projects-list">
                <div className="project-item">
                    <h3 className="project-title">E-Commerce Website</h3>
                    <p className="project-description">
                        A fully functional e-commerce platform with a modern user interface and payment gateway integration.
                    </p>
                </div>
                <div className="project-item">
                    <h3 className="project-title">Portfolio Website</h3>
                    <p className="project-description">
                        A personal portfolio website built with Next.js, showcasing skills, projects, and contact information.
                    </p>
                </div>
                <div className="project-item">
                    <h3 className="project-title">Blog Platform</h3>
                    <p className="project-description">
                        A platform where users can create, read, and comment on blogs, built with React and Node.js.
                    </p>
                </div>
                <div className="project-item">
                    <h3 className="project-title">Task Management App</h3>
                    <p className="project-description">
                        A task manager web application to track tasks and deadlines with features like notifications and priority levels.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;