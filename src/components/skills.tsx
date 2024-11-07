// Skills.tsx
import "../style/skills.css";

function Skills() {
    return (
        <div id="skills" className="skills-container">
            <h2 className="skills-title">My Skills</h2>
            <ul className="skills-list">
                <li className="skill-item">HTML</li>
                <li className="skill-item">CSS</li>
                <li className="skill-item">TypeScript</li>
                <li className="skill-item">React</li>
                <li className="skill-item">Next.js</li>
            </ul>
        </div>
    );
}

export default Skills;