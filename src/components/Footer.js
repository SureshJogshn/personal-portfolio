// Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-blue-700 text-white p-4 absolute top-[99.4%]">
            <div className="container mx-auto text-center">
                <p>© 2025 Suresh Kumar. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/SureshJogshn" className="text-white">GitHub</a>
                    <a href="https://youtube.com/@simple-tech-craft?si=MY0phv8CyCbSHWg0" className="text-white">YouTube</a>
                    <a href="https://www.linkedin.com/in/suresh-kumar-54b0b0272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
