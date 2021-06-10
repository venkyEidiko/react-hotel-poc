import React from 'react';
import img from '../images/default.jpg'
import { FaHandHoldingHeart } from 'react-icons/fa';

const Room = (props: any) => {

    const { totalCount, qualitativeBadgeText, roomComfort, hotelService, formattedCleanliness } = props.apiKey
    return (

        <>
            <div className="container">
                <div>
                    <div className="col-md-10" >
                        <div style={{ backgroundColor: "whitesmoke" }} className="cart">
                            <h1>Review</h1>
                            <hr />
                            <div className="single-room-images">
                                <img src={img} alt="name" className="single-room-images" />
                            </div>
                            <div>
                                <h2>
                                    Hotel Green
                                </h2>
                                <div className="spinner-grow text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-danger" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-warning" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>

                                <div className="spinner-grow text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>


                            </div>
                            <hr />
                            <article>
                                <h3 className="text-md-left">Overview</h3>
                            </article>

                            <div>
                                <section className="single-room">
                                    <div className="single-room-images">

                                    </div>
                                    <div className="single-room-info">

                                        <article className="desc">

                                            <p></p>
                                            <p className="d-flex justify-content-start"><h4> nice and haven </h4></p>
                                            <h3 className="lead"> <p>Total Count :{totalCount} </p></h3>
                                            <h2>{qualitativeBadgeText}</h2>

                                        </article>
                                        <article className="info">
                                            <h3>info</h3>
                                            <h6>price : $99</h6>
                                            <h6>size : 7 SQFT</h6>
                                            <h6>max capacity: `1 person` </h6>
                                            <h6>  pet :  "no pets allowed"</h6>
                                            <h6 >"free breakfast included"</h6>
                                        </article>

                                        <article>
                                            <p className="display-6   justify-content-center"> Thanks and have a nice day <FaHandHoldingHeart /></p>
                                        </article>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </>
    );
}

export default Room;