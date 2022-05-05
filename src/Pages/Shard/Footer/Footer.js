import React from 'react';

const Footer = () => {
    return (
        <div className='w-100 bg-dark text-white py-5'>
            <p>&copy; Copyright- {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;