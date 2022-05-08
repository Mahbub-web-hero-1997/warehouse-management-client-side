import React from 'react';
import { Table } from 'react-bootstrap';

const UsersItem = ({ item }) => {
    return (
        <div className='container mt-5'>
            <h2 className='mt-4'>My Items</h2>
            <hr className='w-25 mx-auto' />
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
                        <td colSpan={1}> <b>Product Name :</b> {item?.product}</td>
                        <td colSpan={1}><b>Supplier Name :</b> {item?.supplier}</td>
                        <td colSpan={1}> <b>Price :</b> ${item?.price}</td>
                        <td colSpan={1}><b>Quantity : </b>{item?.quantity}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default UsersItem;