import React from 'react';
import GlitchText from '../components/GlitchText';
import './Skills.css';
import { motion } from 'framer-motion';

const Skills = () => {
    const technicalSkills = {
        "Programming": ["JavaScript", "Python", "C++", "C", "Java", "HTML", "CSS"],
        "Tools & Technology": ["Git", "GitHub", "Visual Studio Code", "Canva", "Linux(OS)"],
        "Software Development": ["Oriented Programming (OOP)", "Data Structures and Algorithms(DSA)"],
        "Cybersecurity Tools": ["Nmap", "Burpsuite", "Metasploit", "gobuster", "exploitDB", "HiddenEye", "John", "Exiftool", "Binwalk"]
    };

    const activePlatforms = [
        { name: "Leetcode", details: "Solved 400+ problems using C++ & Java | Contest Rating: 1530", link: "https://leetcode.com/u/Aravind-27/" },
        { name: "TryHackMe", details: "Top 1% in Rank | Practiced 250+ Rooms | Level:[0xD] Legend", link: "https://tryhackme.com/p/Aravind.7" },
        { name: "Codechef", details: "Solved 150 problems using C and C++", link: "https://www.codechef.com/users/string_ace_61" },
        { name: "Hackerrank", details: "4 Star C, 4 Star C++, 4 Star Python, 2 Star Problem Solving", link: "https://www.hackerrank.com/profile/aravindj27012007" },
        { name: "Skillrack", details: "Solved 1250+ Problems", link: "https://www.skillrack.com/faces/resume.xhtml?id=515130&key=b017fd479f23d61df8edcbf0cd932832a591d672" },
        { name: "GeeksForGeeks", details: "Solved 75+ Problems | Institute 112th Rank (SECE)", link: "https://www.geeksforgeeks.org/profile/aravindj26d1s" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="page-container skills-page">
            <h2 className="section-title"><span className="text-dim">&lt;</span> <GlitchText text="SKILLS_&_PLATFORMS" /> <span className="text-dim">/&gt;</span></h2>

            <div className="skills-grid">
                <div className="skills-column">
                    <h3 className="column-title">&gt; ./technical_skills.sh</h3>
                    <motion.div
                        className="tech-skills-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {Object.entries(technicalSkills).map(([category, skills], idx) => (
                            <motion.div key={idx} className="skill-category terminal-card" variants={itemVariants}>
                                <div className="card-header">
                                    <span>[ {category.toUpperCase()} ]</span>
                                </div>
                                <div className="card-body">
                                    <div className="tags-container">
                                        {skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="skills-column">
                    <h3 className="column-title">&gt; ./active_platforms.sh</h3>
                    <motion.div
                        className="platforms-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {activePlatforms.map((platform, idx) => (
                            <motion.div key={idx} className="platform-card terminal-card" variants={itemVariants}>
                                <div className="card-body">
                                    {platform.link ? (
                                        <a href={platform.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                            <h4 className="platform-name" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>{platform.name}</h4>
                                        </a>
                                    ) : (
                                        <h4 className="platform-name">{platform.name}</h4>
                                    )}
                                    <p className="platform-details">{platform.details}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
