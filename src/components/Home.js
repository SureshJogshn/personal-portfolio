import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Footer from './Footer';

const Home = () => {
    const typedElement = useRef(null);
    useEffect(() => {
        const typedOptions = {
            strings: ["Web Development", "Android Development", "Internet Of Thing", "Back-End Development"],
            typeSpeed: 50, // typing Speed
            backSpeed: 30, // backspacing speed 
            loop: true, // loop the abimation
        };
        // initialize Typed.js
        const typed = new Typed(typedElement.current, typedOptions);

        //cleanup typed.js instance on component mount unmount
        return () => {
            typed.destroy()
        };
    }, []);
    return (
        <section className='h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                    Hi, I am <span className='text-yellow-300'>Suresh Kumar</span>
                </h1>
                <p className='text-lg md:text-2xl mb-6'>
                    <span ref={typedElement}> </span> Problem Solver | Tech Enthusiast
                </p>
                <p className="text-md md:text-lg max-w-3xl mx-auto mb-6">
                    I specialize in building responsive and dynamic web applications using
                    React.js, JavaScript, and Tailwind CSS. Passionate about solving
                    problems and learning new technologies.
                </p>
                <div className='flex justify-center space-x-4'>
                    <a href='#projects' className='bg-yellow-300 text-black py-2 px-6 rounded shadow-lg hover:bg-yellow-400'
                    >View My Work</a>
                    <a href='/resume.pdf' className='bg-white text-blue-600 py-2 px-6 rouned shadow-lg hover:bg-gray-200 rounded'
                        download >Download Resume</a>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Home
