import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <nav className="flex gap-2 p-2 bg-base-200 rounded-lg">
            <Link to="/" className="btn btn-ghost btn-sm normal-case">Home</Link>
            <Link to="/mobbile" className="btn btn-ghost btn-sm normal-case">Mobile</Link>
            <Link to="/laptop" className="btn btn-ghost btn-sm normal-case">Laptop</Link>
            <Link to="/blog" className="btn btn-ghost btn-sm normal-case">Blog</Link>
            <Link to="/about" className="btn btn-ghost btn-sm normal-case">About</Link>
        </nav>
    );
};

export default Header;