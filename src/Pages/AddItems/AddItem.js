import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebaseInit';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const handleAddItem = event => {
        event.preventDefault()
        const product = event.target.product.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const comment = event.target.comment.value;
        const img = event.target.image.value;
        const email = event.target.email.value;
        const item = { product, supplier, price, quantity, comment, img, email }
        fetch('https://arcane-spire-27010.herokuapp.com/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Item Successfully Added', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }

    return (
        <div className='my-5'>
            <h2>Add Items</h2>
            <form onSubmit={handleAddItem} action="" className='w-50 mx-auto'>
                <div className='d-flex'>
                    <input className='p-1 me-1 w-100' required type="text" name='product' placeholder='Product Name' />
                    <input className='p-1 ms-1 w-100' required type="text" name='supplier' placeholder='Supplier Name' />
                </div>
                <input className='p-1 my-1 w-100' required type="email" name='email' value={user?.email} disabled />
                <input className='p-1 my-1 w-100' required type="number" name='price' placeholder='Price' />
                <input className='p-1 my-1 w-100' required type="number" name='quantity' placeholder='Quantity' />
                <input className='p-1 my-1 w-100' required type="text" name='comment' placeholder='comment' />
                <input className='p-1 my-1 w-100' required type="url" name='image' placeholder='Image URL' />
                <input className='w-100 btn bg-dark text-white' type="submit" value="Add-Item" />

            </form>
        </div>
    );
};

export default AddItem;