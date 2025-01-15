import React from 'react'

const Skills = () => {
    const skills = [
        "HTML", "CSS", "TAILWINDCSS", "JAVASCRIPT", "REACT JS", "REACT NATIVE", "IOT",
        "NODE JS", "MONGO DB", "ADOBE ILLUSTRATOR", "ADOBE PHOTOSHOP"
    ]
    return (
        <section id='skills' className='p-8 bg-white md:max-w-[980px] mx-auto '>
            <h2 className='text-3xl font-semibold mb-5 md:grid-cols-3 gap-4'>Skills</h2>
            <ul className='grid grid-cols-2 gap-6'>
                {skills.map((skill, index) => (
                    <li key={index} className="bg-blue-100 p-2 rounded shadow">{skill}</li>
                ))}
            </ul>
        </section>
    )
}

export default Skills
