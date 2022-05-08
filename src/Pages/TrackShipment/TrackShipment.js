import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../images/extraSection/location.png'
import img1 from '../../images/extraSection/shipment.png'

const TrackShipment = () => {
    return (
        <>
            <div className='container d-flex justify-content-between align-items-center my-5 '>
                <div className='w-50'>
                    <img style={{ height: '500px', }} className='img-fluid' src={img} alt="" />
                </div>
                <div className='w-50 text-start'>
                    <h2>Know The Location Of Your Consignment</h2>
                    <hr className='w-75' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique animi numquam accusantium labore officia nisi at, consequuntur aliquam possimus beatae laudantium repellat molestiae. Eos modi veniam ratione unde, quas dolore quia earum voluptatem vero quo autem aliquid fugiat quasi tempora molestiae voluptatum minus eveniet velit? Consectetur, officiis praesentium rem quia natus ut, corporis non placeat hic, delectus minus aspernatur. Ratione debitis quos, atque enim sequi itaque natus, totam non tenetur molestias eum delectus impedit magni? Sapiente vel voluptatum quae, quas corrupti perspiciatis maiores nostrum blanditiis unde quasi dignissimos obcaecati facere eius tenetur ullam ut culpa sed, aliquam, pariatur laudantium perferendis!</p>
                    <Button className='btn btn-lg btn-primary bg-dark px-5'>Know-Location</Button>
                </div>
            </div>
            <div className='container d-flex justify-content-between align-items-center my-5 '>
                <div className='w-50 text-start me-3'>
                    <h2>Track Your Shipment App!</h2>
                    <hr className='w-75' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique animi numquam accusantium labore officia nisi at, consequuntur aliquam possimus beatae laudantium repellat molestiae. Eos modi veniam ratione unde, quas dolore quia earum voluptatem vero quo autem aliquid fugiat quasi tempora molestiae voluptatum minus eveniet velit? Consectetur, officiis praesentium rem quia natus ut, corporis non placeat hic, delectus minus aspernatur. Ratione debitis quos, atque enim sequi itaque natus, totam non tenetur molestias eum delectus impedit magni? Sapiente vel voluptatum quae, quas corrupti perspiciatis maiores nostrum blanditiis unde quasi dignissimos obcaecati facere eius tenetur ullam ut culpa sed, aliquam, pariatur laudantium perferendis!</p>
                    <Button className='btn btn-lg btn-primary bg-dark px-5'>Track</Button>
                </div>
                <div className='w-50'>
                    <img style={{ height: '500px', }} className='img-fluid' src={img1} alt="" />
                </div>
            </div>
        </>
    );
};

export default TrackShipment;