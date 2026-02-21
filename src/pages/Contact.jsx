import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import Typewriter from '../components/Typewriter';
import './Contact.css';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Initiating network handshake...');

        try {
            // Using FormSubmit.co for free form-to-email routing
            const response = await fetch("https://formsubmit.co/ajax/aravindj27012007@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Transmission from Portfolio"
                })
            });

            if (response.ok) {
                setStatus('Message successfully transmitted to secure terminal.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('[ERROR]: Target server rejected the payload.');
            }
        } catch (error) {
            setStatus('[ERROR]: Network failure. Packet dropped.');
        }

        setTimeout(() => setStatus(''), 6000);
    };

    return (
        <div className="page-container contact-page">
            <h2 className="section-title"><span className="text-dim">&lt;</span> <GlitchText text="ESTABLISH_CONNECTION" /> <span className="text-dim">/&gt;</span></h2>

            <div className="contact-grid">
                <motion.div
                    className="contact-info terminal-card"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="card-header">
                        <span>[ SYSTEM_DETAILS ]</span>
                    </div>
                    <div className="card-body">
                        <h3 className="contact-greeting">
                            <Typewriter text="> Hello, let's collaborate." speed={40} />
                        </h3>
                        <p className="contact-desc">
                            Whether you have a question, want to collaborate on a CTF, or have a job opportunity, my inbox is always open.
                        </p>

                        <div className="contact-links">
                            <a href="mailto:aravindj27012007@gmail.com" className="contact-link-item">
                                <Mail className="contact-icon" /> aravindj27012007@gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/aravindj7/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                                <Linkedin className="contact-icon" /> LinkedIn: AravindJ
                            </a>
                            <a href="https://github.com/AravindJ7" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                                <Github className="contact-icon" /> GitHub: AravindJ7
                            </a>
                            <div className="contact-link-item">
                                <MapPin className="contact-icon" /> Phone: 9363629476
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-wrapper terminal-card"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="card-header">
                        <span>[ TRANSMIT_MESSAGE ]</span>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>ROOT@GUEST_NAME:~#</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>ROOT@GUEST_IP:~#</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>ROOT@PAYLOAD:~#</label>
                                <textarea
                                    rows="5"
                                    placeholder="Input text/notes here..."
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-submit">
                                <Send size={18} /> EXECUTE
                            </button>
                            {status && <p className="form-status"><Typewriter text={status} speed={30} /></p>}
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
