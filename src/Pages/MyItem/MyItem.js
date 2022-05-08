import React from 'react';
import auth from '../../firebaseInit';
import useItems from '../UseItem/UseItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Table } from 'react-bootstrap';
import UsersItem from './UsersItem';


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
            {
                myItem.map(item => <UsersItem
                    key={item._id}
                    item={item}
                ></UsersItem>)
            }
        </div>
    );
};

export default MyItem;