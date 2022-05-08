import React from 'react';

const Error = () => {
    return (
        <div style={{ height: '500px' }} className='d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <h3 className='text-danger fw-bold'>The Content You Search Not Found</h3>
                <h5 className='text-danger fw-bold'>404</h5>
            </div>
        </div>
    );
};

export default Error;