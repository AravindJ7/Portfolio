import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import GlitchText from '../components/GlitchText';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="terminal-window"
                >
                    <div className="terminal-header">
                        <span className="btn-close"></span>
                        <span className="btn-minimize"></span>
                        <span className="btn-expand"></span>
                        <span className="terminal-title">bash -- aravind@sece: ~</span>
                    </div>
                    <div className="terminal-body">
                        <p className="prompt-line">
                            <span className="user">aravind@sece</span>:<span className="path">~</span>$ ./whoami.sh
                        </p>
                        <div className="command-output">
                            <h1 className="hero-title">
                                <GlitchText text="ARAVIND J" />
                            </h1>
                            <h2 className="hero-subtitle">
                                <Typewriter text="> CYBERSECURITY ENTHUSIAST | DEVELOPER | CTF PLAYER" speed={50} delay={1000} />
                            </h2>
                            <p className="hero-desc">
                                Passionate about identifying vulnerabilities, solving real-world security challenges, and building secure platforms. Actively practicing on TryHackMe, solving problems on Leetcode, and participating in CTF competitions.
                            </p>

                            <div className="hero-actions">
                                <a href="/Resume.pdf" download="Aravind_J_Resume.pdf" className="btn btn-download glow-effect">
                                    <Download size={18} /> INITIALIZE_DOWNLOAD_RESUME
                                </a>
                                <a href="/projects" className="btn btn-secondary">
                                    <Terminal size={18} /> ./view_projects.sh
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
