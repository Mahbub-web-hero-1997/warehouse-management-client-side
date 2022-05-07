import React from 'react';
import './SocialLogin.css'
// import img from '../../images/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebaseInit';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const googleSignIn = () => {
        signInWithGoogle()

    }
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
        toast.success('Login Successful')

    }
    if (error) {
        console.error(error)
        
    }
    return (
        <div className='mt-2'>
            <button onClick={googleSignIn} className='btn btn-lg btn-dark w-100'>
                {/* <img width={30} className='me-2' src={img} alt="" /> */}
                Continue with google</button>
        </div>
    );
};

export default SocialLogin;