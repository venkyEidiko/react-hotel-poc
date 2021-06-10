import React from "react";
import Logo from '../images/logo.svg';
import { FaAlignRight, FaHotel } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Reviews from "../api/Reviews";



const Header: React.FC = () => {
    return (
        <>
            {/* <Reviews /> */}
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">

                        <Link to="/">

                            <img src={Logo} alt="Hotel Booking" />
                        </Link>


                    </div>

                    <div>
                        <ul className="nav-links show-nav nav-links" >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/rooms">Rooms</Link></li>
                            

                        </ul>

                    </div>



                </div>

            </nav>
            <div>
            </div>

        </>
    );
}

export default Header;