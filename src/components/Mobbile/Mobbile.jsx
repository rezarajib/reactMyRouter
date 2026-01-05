import React from 'react';
import { FaFilter, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Mobbile = () => {
    // আপনার ই-কমার্স ইউআই অভিজ্ঞতার আলোকে ডামি ডাটা 
    const mobiles = [
        { id: 1, name: "iPhone 15 Pro", brand: "Apple", price: "$999", img: "https://images.unsplash.com/photo-1695048133142-1a20484d256e?q=80&w=400" },
        { id: 2, name: "Samsung Galaxy S24", brand: "Samsung", price: "$899", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400" },
        { id: 3, name: "Google Pixel 8", brand: "Google", price: "$699", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400" },
        { id: 4, name: "OnePlus 12", brand: "OnePlus", price: "$749", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400" },
    ];

    return (
        <div className="container mx-auto p-6 min-h-screen">
            {/* Header & Search Section - আপনার ফিল্টারিং স্কিল অনুযায়ী  */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div>
                    <h1 className="text-4xl font-black text-primary uppercase tracking-tighter">Mobile <span className="text-neutral">Store</span></h1>
                    <p className="text-sm text-gray-500">Explore our latest high-performance smartphones.</p>
                </div>
                
                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative w-full">
                        <input type="text" placeholder="Search mobile..." className="input input-bordered w-full pl-10" />
                        <FaSearch className="absolute left-3 top-4 text-gray-400" />
                    </div>
                    <button className="btn btn-square btn-outline border-gray-300">
                        <FaFilter />
                    </button>
                </div>
            </div>

            {/* Product Grid - Responsive Web Design  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mobiles.map((phone) => (
                    <div key={phone.id} className="card bg-base-100 shadow-sm hover:shadow-2xl transition-all border border-base-200 group">
                        <figure className="px-4 pt-4 overflow-hidden">
                            <img 
                                src={phone.img} 
                                alt={phone.name} 
                                className="rounded-2xl h-60 w-full object-cover group-hover:scale-110 transition-transform duration-300" 
                            />
                        </figure>
                        <div className="card-body p-5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="card-title text-lg font-bold">{phone.name}</h2>
                                    <span className="badge badge-sm badge-ghost">{phone.brand}</span>
                                </div>
                                <div className="text-xl font-black text-primary">{phone.price}</div>
                            </div>
                            
                            <p className="text-xs text-gray-500 mt-2">Latest model with advanced camera and battery life.</p>
                            
                            <div className="card-actions mt-4">
                                <button className="btn btn-primary btn-block gap-2 shadow-lg">
                                    <FaShoppingCart /> Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Special Promo Section */}
            <div className="mt-16 stats shadow w-full bg-neutral text-neutral-content">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title text-gray-300">New Arrivals</div>
                    <div className="stat-value">15+ Models</div>
                    <div className="stat-desc text-primary font-bold">Updated Jan 2026</div>
                </div>
                
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-gray-300">Fast Delivery</div>
                    <div className="stat-value">24 Hours</div>
                    <div className="stat-desc text-secondary font-bold">Inside Dhaka</div>
                </div>
            </div>
        </div>
    );
};

export default Mobbile;