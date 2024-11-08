function Projects() {
    return (
        <section id="projects" className="p-10 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <p className="text-gray-600 text-center mb-10">
                These are projects I have worked on and some that I am still actively developing...
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gray-100 p-6 rounded shadow-lg">
                    <h3 className="text-2xl font-semibold mb-2">E-Commerce Website</h3>
                    <p>A fully functional e-commerce platform with a modern user interface and payment gateway integration.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded shadow-lg">
                    <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
                    <p>A personal portfolio website built with Next.js, showcasing skills, projects, and contact information.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded shadow-lg">
                    <h3 className="text-2xl font-semibold mb-2">Blog Platform</h3>
                    <p>A platform where users can create, read, and comment on blogs, built with React and Node.js.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded shadow-lg">
                    <h3 className="text-2xl font-semibold mb-2">Task Management App</h3>
                    <p>A task manager web application to track tasks and deadlines with features like notifications and priority levels.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;