import React from 'react';
import './Footer.css';

function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="Footer">
            Mitchell Hudson copyright {date}
        </div>
    )
}

export default Footer