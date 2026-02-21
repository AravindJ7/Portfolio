import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50, delay = 0, className = '' }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let timeout;
        let interval;
        let currentIndex = 0;
        let isCancelled = false;

        setDisplayedText(''); // Reset text on effect mount

        const startTyping = () => {
            setIsTyping(true);
            interval = setInterval(() => {
                if (isCancelled) return;
                if (currentIndex < text.length) {
                    // Slicing avoids the "double typing" state issues
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setIsTyping(false);
                }
            }, speed);
        };

        if (delay > 0) {
            timeout = setTimeout(() => {
                if (!isCancelled) startTyping();
            }, delay);
        } else {
            startTyping();
        }

        return () => {
            isCancelled = true;
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, speed, delay]);

    return (
        <span className={className}>
            {displayedText}
            {isTyping && <span className="cursor-blink">|</span>}
        </span>
    );
};

export default Typewriter;
