import React from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, User, BookOpen, Award, Code, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const navItems = [
        { path: '/', label: 'HOME', icon: <Terminal size={18} /> },
        { path: '/about', label: 'ABOUT', icon: <User size={18} /> },
        { path: '/skills', label: 'SKILLS', icon: <BookOpen size={18} /> },
        { path: '/certificates', label: 'CERTS', icon: <Award size={18} /> },
        { path: '/projects', label: 'PROJECTS', icon: <Code size={18} /> },
        { path: '/contact', label: 'CONTACT', icon: <Mail size={18} /> },
    ];

    return (
        <nav className="navbar">
            <div className="nav-brand glow-text">
                <span className="brand-prefix">&gt;</span> ARAVIND.J_<span className="cursor-blink">|</span>
            </div>
            <ul className="nav-links">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
