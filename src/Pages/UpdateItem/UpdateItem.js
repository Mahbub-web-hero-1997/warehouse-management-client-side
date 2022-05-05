import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = (id) => {
    const perams = useParams(id)
    const [update, setUpdate] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default UpdateItem;