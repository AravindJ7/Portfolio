import React from 'react';
import GlitchText from '../components/GlitchText';
import './Projects.css';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "INTERNSECURE (FRESHATHON)",
            year: "2025",
            desc: "Internsecure is designed to detect and prevent fake internship and job offers. The platform leverages a rule-based system called RedFlag, which analyzes offers for suspicious patterns, fraudulent keywords, and inconsistencies. It provides users with instant risk assessments and recommendations to verify authenticity. The project emphasizes user-friendly reporting and integrates educational resources to recognize scams.",
            tech: ["Python", "Rule-based System", "Web Security"],
            github: "#",
            demo: "#"
        },
        {
            title: "PORTFOLIO (CREATATHON)",
            year: "2024",
            desc: "Designed and developed a personal portfolio website to showcase my projects, skills, and achievements in programming and Cybersecurity. The website features a clean, responsive design with hacker-themed animation effects, glitch designs, and smooth navigation. Built using HTML, CSS, JavaScript (React) and hosted on GitHub Pages.",
            tech: ["React", "CSS Animations", "Framer Motion", "Vite"],
            github: "https://github.com/AravindJ7/ADD-Portfolio.git",
            demo: "#"
        },
        {
            title: "PHISHING EMAIL CLASSIFIER",
            year: "2024",
            desc: "A machine learning based phishing email classifier aimed at detecting malicious or scam emails to enhance cybersecurity.",
            tech: ["Python", "Machine Learning", "Cybersecurity"],
            github: "https://github.com/AravindJ7/Phishing-Classifier.git",
            demo: "#"
        }
    ];

    return (
        <div className="page-container projects-page">
            <h2 className="section-title"><span className="text-dim">&lt;</span> <GlitchText text="EXECUTE_PROJECTS" /> <span className="text-dim">/&gt;</span></h2>

            <div className="projects-grid">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        className="project-card terminal-window"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                    >
                        <div className="terminal-header">
                            <span className="btn-close"></span>
                            <span className="btn-minimize"></span>
                            <span className="btn-expand"></span>
                            <span className="terminal-title">./{proj.title.toLowerCase().split(' ')[0]}.sh</span>
                        </div>

                        <div className="project-body">
                            <div className="project-header">
                                <h3 className="project-title">{proj.title}</h3>
                                <span className="project-year">[{proj.year}]</span>
                            </div>

                            <p className="project-desc">{proj.desc}</p>

                            <div className="project-tech">
                                {proj.tech.map((t, tIdx) => (
                                    <span key={tIdx} className="tech-tag">{t}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={proj.github} className="btn-link"><Github size={16} /> Source Code</a>
                                <a href={proj.demo} className="btn-link"><ExternalLink size={16} /> Live Demo</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
