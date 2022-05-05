import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { name, img, price, quantity, supplier, comment } = item;

    return (

        <div className="col-lg-4">
            <Row className=''>
                <Col>
                    <Card>
                        <Card.Img height={300} variant="top" src={img} />
                        <Card.Body className='text-start'>
                            <Card.Title className='m-0 p-0 fs-5'>{name}</Card.Title>
                            <p className='m-0 p-0 fs-5'>Price : ${price}</p>
                            <p className='m-0 p-0 fs-5'>Qunatity : {quantity}</p>
                            <p className='m-0 p-0 fs-5'><b>Suppliers Name : {supplier}</b></p>
                            <Card.Text>
                                {comment}
                            </Card.Text>
                        </Card.Body>

                        <Link to='/login'> <Button className='bg-dark w-100'>Update</Button></Link>
                    </Card>
                </Col>

            </Row>
        </div >

    );
};

export default Item;