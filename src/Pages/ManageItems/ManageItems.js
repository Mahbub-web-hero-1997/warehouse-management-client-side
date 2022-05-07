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
        }

    }


    return (

        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam accusamus praesentium autem facilis aperiam dignissimos ea pariatur ducimus nesciunt quaerat saepe vitae consequuntur temporibus expedita, alias dolor mollitia illo soluta corporis cum velit? Incidunt molestias nemo pariatur laboriosam. Commodi, adipisci maiores. Ipsam, temporibus vitae recusandae quam dolor, repellat, deleniti commodi ut optio iusto voluptatibus. Quo, in quasi amet ea cum dicta, voluptatum vero quae esse explicabo odit, modi veritatis provident labore illum. Minima, architecto repellendus. Nemo natus, in quas quia vitae labore iure laboriosam vero modi ullam culpa, molestiae aspernatur maiores! Molestias quidem repellendus laborum ea sed, quibusdam libero.</p>

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
        </div>
    );
};

export default ManageItems;