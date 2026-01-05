import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaShoppingCart, FaLayerGroup } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section - আপনার প্রোফাইল অনুযায়ী */}
            <div className="hero min-h-[70vh] bg-base-200 rounded-b-[50px] shadow-sm">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <div className="badge badge-outline badge-primary mb-4 py-3 px-6 font-bold uppercase tracking-widest">
                            Available via Upwork
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-tight">
                            Building <span className="text-primary">High-Performance</span> Web Applications
                        </h1>
                        <p className="py-6 text-xl text-gray-600">
                            Software Engineering graduate specializing in React.js and expert Figma to Code conversion[cite: 45, 46]. 
                            Focusing on seamless REST API integration for e-commerce and healthcare platforms[cite: 46].
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link to="/about" className="btn btn-primary px-8">View Profile</Link>
                            <Link to="/blog" className="btn btn-outline px-8">Read Blog</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Expertise - আপনার মূল দক্ষতাসমূহ */}
            <div className="container mx-auto py-20 px-4">
                <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tighter">Technical Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="card bg-base-100 shadow-xl border-b-4 border-primary p-6 text-center hover:-translate-y-2 transition-transform">
                        <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <FaCode className="text-3xl text-primary" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">React.js</h3>
                        <p className="text-sm text-gray-500">Building scalable frontend applications using ES6+ and Context API[cite: 48, 49, 51].</p>
                    </div>
                    <div className="card bg-base-100 shadow-xl border-b-4 border-secondary p-6 text-center hover:-translate-y-2 transition-transform">
                        <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <FaShoppingCart className="text-3xl text-secondary" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">E-commerce UI</h3>
                        <p className="text-sm text-gray-500">Optimizing checkout flows and product-like listings for platforms[cite: 54, 58].</p>
                    </div>
                    <div className="card bg-base-100 shadow-xl border-b-4 border-accent p-6 text-center hover:-translate-y-2 transition-transform">
                        <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <FaLayerGroup className="text-3xl text-accent" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Figma to Code</h3>
                        <p className="text-sm text-gray-500">Pixel-perfect conversion with Tailwind CSS and Responsive Design[cite: 46, 50, 52].</p>
                    </div>
                    <div className="card bg-base-100 shadow-xl border-b-4 border-neutral p-6 text-center hover:-translate-y-2 transition-transform">
                        <div className="bg-neutral/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <FaRocket className="text-3xl text-neutral" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">REST API</h3>
                        <p className="text-sm text-gray-500">Handling real-time API responses and state management[cite: 55, 60].</p>
                    </div>
                </div>
            </div>

            {/* Experience Spotlight - বাস্তব কাজের অভিজ্ঞতা */}
            <div className="bg-neutral text-neutral-content py-20 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold mb-6">Expertise in Digital Medicine & AI Integration</h2>
                            <p className="text-lg opacity-80 mb-6">
                                Developed responsive UIs for healthcare platforms and built React front-ends that communicate with FastAPI backends[cite: 58, 60].
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="badge badge-primary badge-xs"></div> 
                                    Optimized checkout flows [cite: 58]
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="badge badge-primary badge-xs"></div> 
                                    Search filters and product listings [cite: 58]
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="badge badge-primary badge-xs"></div> 
                                    Real-time API response handling [cite: 60]
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="stat bg-base-100 text-neutral rounded-2xl shadow-xl">
                                <div className="stat-title text-gray-500">Graduation</div>
                                <div className="stat-value text-primary">2025</div>
                                <div className="stat-desc font-bold">Daffodil Int. University [cite: 61, 62]</div>
                            </div>
                            <div className="stat bg-base-100 text-neutral rounded-2xl shadow-xl mt-8">
                                <div className="stat-title text-gray-500">Availability</div>
                                <div className="stat-value text-secondary">Remote</div>
                                <div className="stat-desc font-bold">Dhaka, Bangladesh [cite: 43]</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-6 italic">Looking for a Frontend Specialist?</h2>
                <Link to="/about" className="btn btn-primary btn-lg rounded-full px-12 uppercase font-black tracking-widest">
                    Contact Me
                </Link>
            </div>
        </div>
    );
};

export default Home;