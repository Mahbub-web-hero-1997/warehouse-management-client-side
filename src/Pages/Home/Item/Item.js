import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Item = ({ item }) => {
    console.log('item', item);
    const { name, image, price, quantity, supplier, comment, _id } = item;
    const navigate = useNavigate()
    const navigateToItemDetail = id => {
        navigate(`/item/${_id}`)

    }
    return (

        <div className="col-lg-4">
            <Row className=''>
                <Col>
                    <Card>
                        <Card.Img height={300} variant="top" src={image} />
                        <Card.Body className='text-start'>
                            <Card.Title className='m-0 p-0 fs-5'>{name}</Card.Title>
                            <p className='m-0 p-0 fs-5'>Price : ${price}</p>
                            <p className='m-0 p-0 fs-5'>Qunatity : {quantity}</p>
                            <p className='m-0 p-0 fs-5'><b>Suppliers Name : {supplier}</b></p>
                            <Card.Text>
                                {comment}
                            </Card.Text>
                        </Card.Body>

                        <Button onClick={() => navigateToItemDetail(_id)} className='bg-dark w-100'>Manage</Button>
                    </Card>
                </Col>

            </Row>
        </div >

    );
};

export default Item;