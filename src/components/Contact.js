// Contact.js
import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="w-[400px] mx-auto p-8 bg-white flex items-center mt-[220px]
        rounded bg-gray-300 shadow-2xl justify-center">
            <div className="">
                <h2 className="text-3xl font-semibold mb-4">Contact</h2>
                <p>Email: <a href="mailto:sureshkumar@example.com" className="text-blue-500">sureshkumar7874900@gmail.com</a></p>
                <p>Phone: +91 8875920531</p>
                <p>LinkedIn: <a href="#" className="text-blue-500">linkedin.com/in/sureshkumar</a></p>
            </div>
        </section>
    );
};

export default Contact;
