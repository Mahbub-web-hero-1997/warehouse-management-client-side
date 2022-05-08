import React from 'react';
import img from '../../images/banner/person-1.jpg'

const AboutMe = () => {
    return (
        <div className='row align-items-center container p-2'>
            <div className='col'><img className='img-fluid' src={img} alt="" /></div>
            <div className='col text-start'>
                <h1>Md. Mahbub Alam</h1>
                <span>I'm a front end web developer.
                </span>
                <p><b>Expertise:</b> I have 6 years of experience about web development</p>
                <p className=' mb-1'><b>Skills:</b></p>
                <p><b>Programing Language:</b> JavaScript (ES6), TypeScript, HTML,
                    CSS/Sass.
                </p>
                <p><b>Libraries & Frameworks:</b> jQuery, React, Node.js,
                    Express, Bootstrap, Tailwind
                </p>
                <p><b>Tools & Platforms:</b> Git, Netlify, Heroku,
                    Firebase
                </p>
                <span><b>Mobile : </b>01644196242</span><br />
                <span><b>email : </b>mahbub.programing.hero@gmail.com</span>
            </div>
        </div>
    );
};

export default AboutMe;