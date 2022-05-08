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
        <div>
            <h1>this is my item</h1>
            {
                myItem.map(item => <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>                            
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            }
        </div>
    );
};

export default MyItem;