import React from 'react';
import { FaCode, FaShoppingCart, FaStethoscope, FaRobot, FaGraduationCap } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container mx-auto my-12 px-6 lg:px-20">
            {/* Header / Intro Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black uppercase tracking-tight mb-4">
                    MD. <span className="text-primary">RAJIB REZA</span> 
                </h1>
                <div className="badge badge-primary badge-outline p-4 font-bold text-lg">
                    REACT.JS & E-COMMERCE UI DEVELOPER 
                </div>
                <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Software Engineering graduate (2025) specializing in building high-performance, 
                    responsive web applications using React.js[cite: 45]. Expert in Figma to Code 
                    conversion and seamless REST API integration[cite: 46].
                </p>
                <p className="text-sm mt-2 text-gray-400">Dhaka, Bangladesh [cite: 43]</p>
            </div>

            {/* Technical Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                <div className="card bg-base-200 p-6 shadow-sm hover:shadow-md transition-all">
                    <FaCode className="text-3xl text-primary mb-4" />
                    <h3 className="font-bold text-lg">Core Tech</h3>
                    <p className="text-sm">React.js, JavaScript (ES6+), Redux / Context API [cite: 48, 49, 51]</p>
                </div>
                <div className="card bg-base-200 p-6 shadow-sm hover:shadow-md transition-all">
                    <FaShoppingCart className="text-3xl text-secondary mb-4" />
                    <h3 className="font-bold text-lg">E-commerce</h3>
                    <p className="text-sm">Workflow optimization, Checkout flows, Product listings [cite: 54, 58]</p>
                </div>
                <div className="card bg-base-200 p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="text-3xl mb-4">🎨</div>
                    <h3 className="font-bold text-lg">Styling</h3>
                    <p className="text-sm">Tailwind CSS, Responsive Web Design, Figma to Code [cite: 50, 52, 46]</p>
                </div>
                <div className="card bg-base-200 p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="text-3xl mb-4">⚙️</div>
                    <h3 className="font-bold text-lg">Integration</h3>
                    <p className="text-sm">REST API Integration, Git & GitHub [cite: 55, 53]</p>
                </div>
            </div>

            {/* Relevant Experience Section */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                    <span className="w-10 h-1 bg-primary"></span> Relevant Experience
                </h2>
                <div className="space-y-8">
                    {/* Project 1 */}
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 shadow-sm">
                        <input type="radio" name="experience-accordion" defaultChecked /> 
                        <div className="collapse-title text-xl font-bold flex items-center gap-4">
                            <FaStethoscope className="text-primary" /> Digital Medicine Platform 
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-600 mb-4">Developed a responsive UI for a healthcare platform[cite: 58].</p>
                            <ul className="list-disc list-inside text-sm space-y-2 ml-4">
                                <li>Implemented product-like listings and search filters[cite: 58].</li>
                                <li>Optimized checkout flows using Tailwind CSS and React[cite: 58].</li>
                            </ul>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 shadow-sm">
                        <input type="radio" name="experience-accordion" /> 
                        <div className="collapse-title text-xl font-bold flex items-center gap-4">
                            <FaRobot className="text-secondary" /> AI Assistant MVP Integration 
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-600 mb-4">Built a scalable React front-end communicating with a FastAPI backend[cite: 60].</p>
                            <ul className="list-disc list-inside text-sm space-y-2 ml-4">
                                <li>Focused on state management and real-time API responses[cite: 60].</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Card */}
            <div className="card lg:card-side bg-neutral text-neutral-content shadow-xl overflow-hidden">
                <figure className="lg:w-1/3 bg-primary p-12 flex flex-col items-center justify-center text-white">
                    <FaGraduationCap className="text-8xl" />
                    <h2 className="text-2xl font-bold mt-4">Education</h2>
                </figure>
                <div className="card-body lg:w-2/3">
                    <h2 className="card-title text-2xl">B.Sc. in Software Engineering </h2>
                    <p className="text-xl">Daffodil International University </p>
                    <div className="badge badge-outline mt-2 text-lg px-4 py-3">Class of 2025 </div>
                </div>
            </div>
        </div>
    );
};

export default About;