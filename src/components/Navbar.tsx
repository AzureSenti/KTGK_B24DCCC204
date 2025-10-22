import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    MyBlog
                </Link>
                <div className="navbar-links">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        end //
                    >
                        Trang chủ
                    </NavLink>
                    <NavLink
                        to="/create"
                        className="nav-link btn btn-primary"
                    >
                        Viết bài mới
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
