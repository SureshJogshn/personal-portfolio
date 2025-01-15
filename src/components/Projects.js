// Projects.js
import React from "react";

const Projects = () => {
    const projects = [
        {
            name: "Authentication System",
            description: "Built a secure authentication system using Java.",
            tech: "Java, Firebase",
            link: "#",
        },
        {
            name: "React Portfolio",
            description: "A personal portfolio built with React.js.",
            tech: "React.js, Tailwind CSS",
            link: "#",
        },
        {
            name: "Weather App",
            description: "Weather App: A web app built with React.js and Tailwind CSS that shows real-time weather information for any location, including temperature, humidity, and wind speed.",
            tech: "React.js, Tailwind CSS",
            link: "https://bucolic-faun-a464bc.netlify.app/",
        },
    ];

    return (
        <section id="projects" className="p-8 bg-gray-100">
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <p>{project.description}</p>
                        <p className="text-sm text-gray-600">Tech: {project.tech}</p>
                        <a href={project.link} className="text-blue-500 underline">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
