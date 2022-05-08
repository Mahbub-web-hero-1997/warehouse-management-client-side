import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebaseInit';



const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth);
    let getError;
    let getLoading;
    if (error) {
        getError = <p>Error: {error.message}</p>

    }
    if (sending) {
        getLoading = <p>Sending...</p>;
    }
    const resetPass = () => {
        sendPasswordResetEmail(email);
        toast.success('email sent');
    }
    return (
        <div>
            <ToastContainer

            ></ToastContainer>
            < div style={{ height: '100vh' }} className=" w-50 mx-auto d-flex flex-column align-items-center justify-content-center " >
                <div className='w-100 mb-4'>
                    <input className='px-4 py-2 w-75 '
                        type="email"
                        placeholder='Enter Current Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button onClick={() => resetPass()} className='btn btn-lg btn-dark ms-2 text-start'>
                    Reset password
                </button>

            </div >

        </div>
    );







};

export default ResetPassword;