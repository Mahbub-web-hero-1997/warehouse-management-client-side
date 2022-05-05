import React from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className='w-50  mx-auto fw-bold mt-5'>Please LogIn!</h1>
            <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 py-2 ps-2 border-0 login_Input w-100' placeholder='Your Name' name='name' {...register("Name")} required />
                <input className='mb-2 py-2 ps-2 border-0 login_Input w-100' placeholder='Your Email' name='email' {...register("Email")} required />
                <input className='mb-2 py-2 ps-2 border-0 login_Input w-100' placeholder='Your Password' name='password' type="number" {...register("Password")} required />
                <input className='w-100 fs-5 border-0 fw-bold login_Button py-1 ' type="submit" value='Register' />
            </form>
            <p className=' w-50 mx-auto text-start mt-2'>New to ..! <span className='ms-3'><Link to='/register'>Please Register!</Link></span></p>
        </div>
    );
};

export default Login;