
import React from 'react';
import { useState } from 'react';
import { FaHotel, FaBeer } from 'react-icons/fa';
import Reviews from '../api/Reviews';


const Search = () => {
    const [input, setInput] = useState('');
    return (
        <>
            <br></br>
            <br></br>

            <div className="d-flex justify-content-center">
                <h3> <i> <FaBeer />  Stay home Stay Happy <FaHotel /> </i></h3>

            </div>
            <h3></h3>
            <select className="form-select" aria-label="Default select example" value={input} onChange={(event: any) => setInput(event.target.value)}>
                <option selected>Select the HOTEL ID</option>
                <option value="363464">363464</option>
                <option value="363469">363469</option>
                <option value="363471">363471</option>
            </select>
            <div className="row align-iteam-center">
                <div className="d-flex p-2"> Your Room id is {input} </div>
            </div>

            <Reviews info={input} />


        </>
    );
}

export default Search;