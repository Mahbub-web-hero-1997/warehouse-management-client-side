import React from 'react';
import img from '../../../images/banner/banner.png'

const Banner = () => {
    return (
        <div className='d-flex align-items-center'>
            <div className='w-50'>
                <h2>This is my house</h2>
            </div>
            <div className='w-50'>
                <img className='img-fluid' src={img} alt="" />
            </div>

        </div>
    );
};

export default Banner;