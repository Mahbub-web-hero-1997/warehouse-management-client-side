import React from 'react';
import img from '../../../images/banner/banner.png'

const Banner = () => {
    return (
        <div className='d-flex align-items-center'>
            <div className='w-50'>
                <h2>The Item House</h2>
                <p className='w-75 text-start mx-auto'><b>Find something memorable, join a community doing good.Home may be where the heart is—but it should also be where you keep a lot of other important stuff, too.</b></p>
            </div>
            <div className='w-50'>
                <img className='img-fluid' src={img} alt="" />
            </div>

        </div>
    );
};

export default Banner;