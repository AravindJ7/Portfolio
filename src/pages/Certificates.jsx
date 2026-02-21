import React from 'react';
import GlitchText from '../components/GlitchText';
import './Certificates.css';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Target } from 'lucide-react';

const Certificates = () => {
    const certs = [
        { title: "Student SOC fundamentals", issuer: "Microsoft", year: "2025" },
        { title: "Presecurity Path", issuer: "TryHackMe", year: "2025" },
        { title: "Cybersecurity 101 Path", issuer: "TryHackMe", year: "2025" },
        { title: "Problem Solving | Python Basics | SQLBasics", issuer: "Hackerrank", year: "2025" },
        { title: "Getting started with Devops", issuer: "AWS", year: "2025" },
        { title: "Networking Basics | IntroductiontoCybersecurity", issuer: "Cisco", year: "2024" },
        { title: "Programming in C", issuer: "Coursera", year: "2024" },
        { title: "Python Programming Masterclass", issuer: "Udemy", year: "2024" },
        { title: "Mastering Data Structures & AlgorithmsusingC&C++", issuer: "Udemy", year: "2024" }
    ];

    const certificateImages = [
        "1757093598076.png",
        "260215_01h15m36s_screenshot.png",
        "260215_01h16m46s_screenshot.png",
        "260215_01h17m39s_screenshot.png",
        "Cpp.jpeg",
        "DSA.jpeg",
        "Devops.jpeg",
        "Dockers.jpg",
        "EC DW.png",
        "GREAT LEARNING.jpg",
        "GuviCertification - 125n4z793102132ZqL.png",
        "IMG-20250218-WA0011.jpg",
        "IMG-20250413-WA0016.jpg",
        "IMG-20250413-WA0017.jpg",
        "JS.jpeg",
        "Microsoft.jpeg",
        "Networking.jpg",
        "Screenshot_20250429-181751.Internet.png",
        "Sql.jpeg",
        "260221_20h20m47s_screenshot.png",
        "260221_20h21m03s_screenshot.png",
        "260221_20h21m19s_screenshot.png",
        "260221_20h32m22s_screenshot.png",
        "260221_20h33m29s_screenshot.png",
        "260221_20h34m01s_screenshot.png",
        "260221_20h34m41s_screenshot.png",
        "260221_20h35m04s_screenshot.png",
        "260221_20h35m27s_screenshot.png"
    ];

    const achievements = [
        {
            title: "First Runner up",
            desc: "Got Second Place in Inter College level CTF Program conducted by WiCYS.",
            icon: <Target className="ach-icon" />
        },
        {
            title: "Finalist(Cyberstorm)",
            desc: "Mumbai's Largest CTF at SIES Graduate school of technology (Mumbai).",
            icon: <ShieldAlert className="ach-icon" />
        },
        {
            title: "Fourth Place",
            desc: "LemonCTF conducted by Amrita Vishwa vidyapeetham, got APIsec vouchers.",
            icon: <Award className="ach-icon" />
        }
    ];

    return (
        <div className="page-container certs-page">
            <h2 className="section-title"><span className="text-dim">&lt;</span> <GlitchText text="CERTS_&_ACHIEVEMENTS" /> <span className="text-dim">/&gt;</span></h2>

            <div className="certs-achieve-grid">
                <div className="achievements-section">
                    <h3 className="category-title text-glow">ACHIEVEMENTS_LOG</h3>
                    <div className="achievements-list">
                        {achievements.map((ach, idx) => (
                            <motion.div
                                key={idx}
                                className="achievement-card terminal-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="ach-icon-wrapper">
                                    {ach.icon}
                                </div>
                                <div className="ach-content">
                                    <h4 className="ach-title">{ach.title}</h4>
                                    <p className="ach-desc">{ach.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="certificates-section">
                    <h3 className="category-title text-glow">CERTIFICATIONS_DB</h3>
                    <div className="certs-list">
                        {certs.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                className="cert-item"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 5) * 0.1 }}
                            >
                                <div className="cert-bullet">&gt;</div>
                                <div className="cert-info">
                                    <div className="cert-title">{cert.title}</div>
                                    <div className="cert-meta">
                                        <span className="cert-issuer">[{cert.issuer}]</span>
                                        <span className="cert-year">{cert.year}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="certificate-scans-section" style={{ marginTop: '3rem' }}>
                <h3 className="category-title text-glow">CERTIFICATE_SCANS</h3>
                <div className="certs-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                    {certificateImages.map((img, idx) => (
                        <motion.a
                            key={idx}
                            href={`/certificates/${img}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-image-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 4) * 0.1 }}
                            style={{ display: 'block', border: '1px solid rgba(0,255,65,0.3)', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'rgba(5,5,5,0.8)' }}
                        >
                            <img
                                src={`/certificates/${img}`}
                                alt={`Certificate ${idx}`}
                                style={{ width: '100%', height: '200px', objectFit: 'contain', display: 'block' }}
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
