import React from 'react';
import { Button, Card, Col, Row, } from 'react-bootstrap';
import './Manage.css'

const Manage = ({ item, handleDeleteItem }) => {

    const { img, product, price, quantity, supplier, _id } = item;


    return (

        <div className="col-lg-6">
            <Row>
                <Col>
                    <Card className='d-flex flex-row align-items-center'>
                        <div className='manage_cover'>
                            <img width={400} height={100} className='img-fluid' src={img} alt="" />
                        </div>
                        <Card.Body className='text-start'>
                            <Card.Title className='m-0 p-0 fs-5'> {product}</Card.Title>
                            <p className='m-0 p-0 fs-5'><b>Supplier: {supplier}</b></p>
                            <p className='m-0 p-0 fs-5'>Price : ${price}</p>
                            <p className='m-0 p-0 fs-5'>Qunatity : {quantity}</p>
                            <Button onClick={() => handleDeleteItem(_id)} className='btn btn-primary bg-dark mt-1'>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div >


    );
};

export default Manage;