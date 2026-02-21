import React from 'react';

const GlitchText = ({ text, as: Component = 'span', className = '', style = {} }) => {
    return (
        <Component
            className={`glitch ${className}`}
            data-text={text}
            style={{ ...style, position: 'relative', display: 'inline-block' }}
        >
            {text}
        </Component>
    );
};

export default GlitchText;
