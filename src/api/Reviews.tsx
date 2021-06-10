import axios from "axios";
import React from "react";
import Select from '../component/Select';
import { useState } from "react";
import img from '../images/default.jpg'
import Room from "../component/Room";
import { useEffect } from "react";
import { useLayoutEffect } from "react";


const Reviews = (props: any) => {
    interface IState {
        totalCount: number;
        roomComfort: number;
        qualitativeBadgeText: String;
        hotelService: number;
        formattedCleanliness: number;
    }
    const Default = {
        totalCount: 0,
        roomComfort: 0,
        qualitativeBadgeText: "",
        hotelService: 3,
        formattedCleanliness: 4

    }
    const [inputData, setInputData]: any = useState<IState>(Default);

    const hotel_id = props.info;

    const getData = async () => {



        console.log("your hotel ID id   " + hotel_id);
        const locale = "en_US";
        try {
            const res = await fetch(`https://hotels-com-provider.p.rapidapi.com/v1/hotels/reviews?hotel_id=${hotel_id}&locale=${locale}`, {
                "headers": {
                    "x-rapidapi-key": "59949a6649msh41bc00e28ce60b0p18ceb5jsn74da2d7f7342",
                    "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com"
                }

            })
            const data = await res.json();

            console.log("hlo")

            const totalCount = data.overview.totalCount;


            const qualitativeBadgeText = data.overview.qualitativeBadgeText;

            const roomComfort = data.overview.roomComfort;

            const hotelService = data.overview.hotelService;

            const formattedCleanliness = data.overview.formattedCleanliness;
            console.log(totalCount, qualitativeBadgeText, roomComfort, hotelService, formattedCleanliness);
            setInputData(data.overview);

        } catch (err) {
            console.log("API error")
            console.log(err);
        }
    };
    useEffect(() => {
        if (hotel_id && hotel_id !== "") getData();

    }, [hotel_id]);

    return (
        <>


            <Room apiKey={inputData} />

        </>
    );

}


export default Reviews;