import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebaseInit';
import { toast } from 'react-toastify';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [user1] = useAuthState(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/";
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)

    }
    if (user1) {
        navigate(from, { replace: true })

    }


    return (
        <div className='container mt-5 w-50 mx-auto'>
            <h1>Please LogIn</h1>
            <Form onSubmit={handleSubmit} className='my-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='mb-1'>New to Teeth-consultant?
                    <Link to='/register'>
                        <span className='btn border-0 bg-none mb-1 text-danger'>Please Register!</span>
                    </Link>
                </p>
                <Link className='text-decoration-none' to='/reset'><span className='d-block mb-2 btn w-25 border-0'>Reset-Password?</span></Link>
                <Button className='btn btn-lg w-100' variant="dark" type="submit">
                    Submit
                </Button>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;