import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateItem = (id) => {
    const { itemId } = useParams();
    const [service, setService] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const url = `https://arcane-spire-27010.herokuapp.com/items/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [itemId, reload]);

    const handleUpdateButton = async event => {
        event.preventDefault();
        const newQuantity = event.target.quantity.value;
        const quantity = parseInt(service.quantity) + parseInt(newQuantity)
        await axios.put(`https://arcane-spire-27010.herokuapp.com/items/${itemId}`, {
            quantity
        })
            .then(response => {
                setReload(!reload)
                console.log(response);
            })
    }
    const handleDeliveredButton = () => {
        const quantity = parseInt(service.quantity) - 1;
        axios.put(`https://arcane-spire-27010.herokuapp.com/items/${itemId}`, {
            quantity
        })
            .then(response => {
                setReload(!reload)
                console.log(response);
            })
        console.log(quantity);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img width={300} className='img-fluid' src={service.img} alt="" />
                </div>
                <div className="col-md-6">
                    <div className='service_Title'>
                        <h3>{service.name} </h3>
                        <h5>Price : ${service.price}</h5>
                        <p>Quantity : {service.quantity}</p>
                        <p>Supplier : {service.supplier}</p>
                        <p>Comment : {service.comment}</p>
                    </div>
                    <form onSubmit={handleUpdateButton} action="">
                        <input type="text" name='quantity' placeholder='Add Quantity' />
                        <input type="submit" value="Update-Item" />
                    </form>
                    <input onClick={handleDeliveredButton} type="submit" value="Delivered" />
                </div>
            </div>
        </div>
    )
};

export default UpdateItem;