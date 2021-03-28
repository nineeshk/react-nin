import React from 'react'
import logo from './logo.svg'
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
    const { name, address, image, hours, id } = props;
    return (
        <div className="POPOSSpace">
            <Link to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
            </Link>
            <Link to={`/details/${id}`}>
                <h1>{name}</h1>
            </Link>
            <div>{address}</div>
            <div className="hours">{hours}</div>
        </div>
    )
}

export default POPOSSpace
