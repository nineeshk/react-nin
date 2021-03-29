import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js';

function POPOSList() {
    const [ query, setQuery ] = useState('')

    const spaces = data.filter((object) => {
        const inTitle = object.title.toLowerCase().includes(query.toLowerCase())
        const inAddress = object.address.toLowerCase().includes(query.toLowerCase())
        return inTitle || inAddress
    }).map((object, i) => {
        const { id, title, address, images, hours } = object
        return (
            <POPOSSpace
                id={id}
                key={`${title}-${id}`}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    })

    return (
        <div className="POPOSList">
            <form>
                <input
                    value={query}
                    placeholder="Search"
                    onChange={ (e) => setQuery(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {spaces}
        </div>
    )
}

export default POPOSList