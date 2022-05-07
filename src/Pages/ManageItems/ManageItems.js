import axios from 'axios';
import React from 'react';
import useItems from '../UseItem/UseItem';
import Manage from './Manage';

const ManageItems = ({ item }) => {
    const [items, setItems] = useItems();
    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            axios.delete(`http://localhost:5000/items/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id)
                        setItems(remaining)
                    }
                })
            console.log(id);
        }

    }
    return (
        <div className='row gy-4 '>
            {
                items.map(item => <Manage
                    key={item._id}
                    item={item}
                    handleDeleteItem={handleDeleteItem}
                >

                </Manage>)
            }

        </div>

    );
};

export default ManageItems;