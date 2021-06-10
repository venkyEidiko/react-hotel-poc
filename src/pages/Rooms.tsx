import React from 'react';
import Cover from '../component/Cover'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom';
import Select from '../component/Select';



const Rooms: React.FC = () => {
    return (
        <React.Fragment>
        <Cover coverClass="roomsHero">
            <Banner 
            title="our rooms"
            >
            <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Cover>
        <Select />
        
        
        </React.Fragment>
    )
}

export default Rooms;