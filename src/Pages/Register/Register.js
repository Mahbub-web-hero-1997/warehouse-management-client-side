import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebaseInit';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const handleNameBlur = e => {
        setName(e.target.value)
    }
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPass = e => {
        setConfirmPass(e.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='container mt-5 w-50 mx-auto'>
            <h1>Please Register!</h1>
            <Form onSubmit={handleSubmit} className='my-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPass} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p className='mb-1'>Already have an account?
                    <Link to='/login'>
                        <span className='btn border-0 bg-none mb-1 text-danger'>Please LogIn!</span>
                    </Link>
                </p>
                <Button className='btn btn-lg w-100' variant="dark" type="submit">
                    Submit
                </Button>

                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Register;