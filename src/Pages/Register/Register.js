import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'


const Register = () => {


    return (
        <div>
            <h1 className='my-5'>Please Register!</h1>
            <form action="" className='d-flex flex-column w-50 mx-auto border-0'>
                <div className='w-100'>
                    <input className='w-50 border-0 rounded mb-3 p-3  register_input' type="text" name="name" id="" placeholder='First Name' required />
                    <input className='w-50 border-0 rounded mb-3 p-3  register_input' type="text" name="name" id="" placeholder='last Name' required />
                </div>
                <input className='w-100 p-1 mb-3 border-0 rounded p-3 register_input' type="email" name="email" id="" placeholder='Your Email' required />
                <input className='w-100 p-1 mb-3 border-0 rounded p-3 register_input' type="password" name="password" id="" placeholder='Password' required />
                <input className='w-100 p-1 mb-3 border-0 rounded p-3 register_input' type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />
                <input className='w-100 fs-5 border-0 fw-bold login_Button py-2 ' type="submit" value='Register' />
            </form>
            <p className=' w-50 mx-auto text-start mt-2'>Already have an account? <span className='ms-3'><Link to='/login'>Please LogIn!</Link></span></p>
        </div>
    );
};

export default Register;