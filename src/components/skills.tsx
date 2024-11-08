function Skills() {
    return (
        <section id="skills" className="p-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
            <ul className="flex flex-wrap justify-center gap-4">
                <li className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded">HTML</li>
                <li className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded">CSS</li>
                <li className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded">TypeScript</li>
                <li className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded">React</li>
                <li className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded">Next.js</li>
            </ul>
        </section>
    );
}

export default Skills;