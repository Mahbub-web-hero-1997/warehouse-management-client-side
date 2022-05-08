import React from 'react';
import TrackShipment from '../TrackShipment/TrackShipment';
import Banner from './Banner/Banner';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <TrackShipment></TrackShipment>
        </div>
    );
};

export default Home;