import React from 'react';

const Laptop = () => {
    // ডামি ডাটা (আপনি চাইলে পরে API থেকে আনতে পারেন)
    const laptops = [
        { id: 1, name: "MacBook Pro M3", price: "$1999", img: "https://img.freepik.com/free-photo/laptop-with-blank-screen-on-white-background_155003-17332.jpg" },
        { id: 2, name: "Dell XPS 15", price: "$1499", img: "https://img.freepik.com/free-photo/laptop-device-with-minimalist-monochromatic-background_23-2150763336.jpg" },
        { id: 3, name: "HP Spectre x360", price: "$1299", img: "https://img.freepik.com/free-photo/laptop-with-blank-screen-isolated_23-2148128362.jpg" },
    ];

    return (
        <div className="container mx-auto p-6">
            {/* Header Section */}
            <div className="text-center my-10">
                <h1 className="text-5xl font-extrabold text-primary mb-4">Premium Laptops</h1>
                <p className="text-gray-500 max-w-lg mx-auto">Explore the latest and most powerful laptops for your professional and creative needs.</p>
            </div>

            {/* Laptop Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {laptops.map(laptop => (
                    <div key={laptop.id} className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                        <figure className="px-6 pt-6">
                            <img src={laptop.img} alt={laptop.name} className="rounded-xl h-48 object-cover w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{laptop.name}</h2>
                            <p className="text-secondary font-bold text-xl">{laptop.price}</p>
                            <p className="text-sm text-gray-500 italic">High performance guaranteed with the latest processors.</p>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-outline btn-primary btn-sm">Details</button>
                                <button className="btn btn-primary btn-sm">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Simple Banner Section */}
            <div className="hero bg-base-200 rounded-3xl mt-16 p-10">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-bold">Special Discount!</h2>
                        <p className="py-6">Get up to 20% off on all Gaming Laptops this week.</p>
                        <button className="btn btn-secondary">Get Offer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laptop;