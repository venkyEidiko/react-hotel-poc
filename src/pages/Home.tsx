import React from "react";
import Services from "../component/Services";
import Cover from '../component/Cover';
import { Link } from 'react-router-dom';
import Banner from '../component/Banner';
     const Home = () => {
        return (
            <>
                <Cover>


                    <Banner
                        title="luxurious rooms"
                        subtitle="deluxe rooms starting at $99"
                    >
                        <Link to="/rooms" className="btn-primary">Check out Our Rooms</Link>
                    </Banner>
                </Cover>

                <Services />



            </>
        );
    }


export default Home;