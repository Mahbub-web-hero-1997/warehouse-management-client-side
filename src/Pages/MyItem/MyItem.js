import React from 'react';
import auth from '../../firebaseInit';
import useItems from '../UseItem/UseItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Table } from 'react-bootstrap';


const MyItem = () => {
    const [items, setItems] = useItems()
    const [user, loading] = useAuthState(auth)
    console.log('userEmail', user?.email);
    if (items === 0) {
        <p>Loading.....</p>
    }
    const myItem = items.filter(item => item?.email === user?.email);
    console.log('MyItem', myItem);

    return (

        // product, supplier, price, quantity, comment, img, _id
        <div>
            <h1>this is my item</h1>
            {
                myItem.map(item => <div className='container'>
                    <Table striped bordered hover>
                        {/* <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Supplier Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <td colSpan={1}> <b>Product Name :</b> {item.product}</td>
                                <td colSpan={1}><b>Supplier Name :</b> {item.supplier}</td>
                                <td colSpan={1}> <b>Price :</b> ${item.price}</td>
                                <td colSpan={1}><b>Quantity : </b>{item.quantity}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            }
        </div>
    );
};

export default MyItem;