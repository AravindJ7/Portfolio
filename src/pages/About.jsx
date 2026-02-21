import React from 'react';
import GlitchText from '../components/GlitchText';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    const education = [
        {
            degree: 'B.E CSE(CYS)',
            institution: 'Sri Eshwar College of Engineering',
            score: 'CGPA : 8.65',
            duration: '2024-2028'
        },
        {
            degree: 'HSC',
            institution: 'SSM Higher Secondary School',
            score: '89.5%',
            duration: '2022-2024'
        },
        {
            degree: 'SSLC',
            institution: 'SSM Higher Secondary School',
            score: '83.0%',
            duration: '2021-2022'
        }
    ];

    return (
        <div className="page-container about-page">
            <h2 className="section-title"><span className="text-dim">&lt;</span> <GlitchText text="ABOUT_ME" /> <span className="text-dim">/&gt;</span></h2>

            <div className="about-content">
                <motion.div
                    className="about-card terminal-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="card-header">
                        <span>[ EDUCATION ]</span>
                    </div>
                    <div className="card-body edu-list">
                        {education.map((edu, idx) => (
                            <div key={idx} className="edu-item">
                                <div className="edu-header">
                                    <h3 className="edu-degree">{edu.degree}</h3>
                                    <span className="edu-duration">{edu.duration}</span>
                                </div>
                                <div className="edu-details">
                                    <span className="edu-inst">{edu.institution}</span>
                                    <span className="edu-score">{edu.score}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="about-card terminal-card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="card-header">
                        <span>[ INTERNSHIP ]</span>
                    </div>
                    <div className="card-body">
                        <h3 className="intern-title">Cybersecurity Intern (Shadowfox Security)</h3>
                        <span className="intern-duration">MAY-2025</span>
                        <p className="intern-desc">
                            Gained real-time experience in scanning Shadowfox's own websites for vulnerabilities. Performed vulnerability assessment, reported findings, and contributed to a detailed technical report. Understood real-world web security threats and mitigation techniques. Attacked their own company website and reported about the problems in their website.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
