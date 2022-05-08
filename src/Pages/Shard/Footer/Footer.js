import React from 'react';

const Footer = () => {
    return (
        <div className='w-100 bg-dark text-white mt-5 mb-0 py-5'>
            <p>&copy; Copyright- {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;