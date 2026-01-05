import React from 'react';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Figma to React: Mastering Seamless Conversion",
            category: "UI Development",
            description: "How I approach converting complex Figma designs into high-performance React components.",
            date: "Oct 20, 2025",
            image: "https://images.unsplash.com/photo-1581291518062-c12f27a9c3c1?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 2,
            title: "Optimizing E-commerce Checkout Flows",
            category: "E-commerce",
            description: "Strategies for building responsive and user-friendly checkout systems using Tailwind CSS.",
            date: "Nov 05, 2025",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 3,
            title: "React & FastAPI: Real-time API Integration",
            category: "Backend Integration",
            description: "Lessons learned while building scalable front-ends for AI Assistant MVPs.",
            date: "Dec 12, 2025",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
        }
    ];

    return (
        <div className="bg-base-100 min-h-screen pb-20">
            {/* Blog Header Section */}
            <div className="bg-neutral text-neutral-content py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-widest">
                    Dev <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</span>
                </h1>
                <p className="max-w-xl mx-auto text-gray-400 text-lg">
                    Sharing my journey as a React.js specialist and E-commerce UI developer.
                </p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto mt-[-50px] px-4 lg:px-20">
                {/* Search & Categories (Mockup) */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 bg-base-100 p-6 rounded-2xl shadow-xl border border-base-200">
                    <div className="join w-full md:w-auto">
                        <input className="input input-bordered join-item w-full md:w-64" placeholder="Search articles..." />
                        <button className="btn join-item btn-primary uppercase font-bold">Search</button>
                    </div>
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto py-2">
                        <button className="btn btn-sm btn-outline btn-primary">React</button>
                        <button className="btn btn-sm btn-outline">E-commerce</button>
                        <button className="btn btn-sm btn-outline">UI/UX</button>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="card bg-base-100 shadow-xl group hover:border-primary border border-transparent transition-all duration-300">
                            <figure className="relative overflow-hidden">
                                <img src={post.image} alt={post.title} className="group-hover:scale-110 transition-transform duration-500 h-56 w-full object-cover" />
                                <div className="absolute top-4 left-4">
                                    <div className="badge badge-primary font-bold shadow-lg">{post.category}</div>
                                </div>
                            </figure>
                            <div className="card-body">
                                <div className="text-xs text-gray-400 mb-1">{post.date}</div>
                                <h2 className="card-title text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 text-sm line-clamp-3">
                                    {post.description}
                                </p>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-link btn-primary p-0 no-underline hover:underline decoration-2">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter / CTA */}
                <div className="mt-20 card bg-primary text-primary-content p-10 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Want more Dev updates?</h2>
                        <p className="mb-6 opacity-90 max-w-md mx-auto">Get notified about my latest projects and tutorials on React and Frontend workflows.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-2">
                            <input type="email" placeholder="email@example.com" className="input input-bordered text-neutral w-full max-w-xs" />
                            <button className="btn btn-neutral uppercase font-black">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;