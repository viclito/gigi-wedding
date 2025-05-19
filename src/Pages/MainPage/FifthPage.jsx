import React, { useState } from 'react';
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import Church from '../../assets/church.png'
import house from '../../assets/house.png'
import arrow from '../../assets/arrow.png'
import stage from '../../assets/stage.png'
import { Box, Button } from '@mui/material';

const LocationPage = () => {

     const [selected, setSelected] = useState("bride");
  const churchLocation = {
    name: "Our Lady of Good Health Church",
    address: "Munchirai , Puthukkadai",
    time: "Friday, May 23rd, 2025 at 10:30 AM",
    mapUrl: "https://maps.app.goo.gl/mjuvB8fjVZoJ3c8A9"
  };
  const GroomHouseLocation = {
    name: "Jebin Rose House",
    address: "Rosebavan , Kandervilagam , Vanniyakudy Post",
    time: "Friday, May 23rd, 2025 at 9:00 AM",
    mapUrl: "https://maps.app.goo.gl/9Uawo7ZyBkUymnZd7"
  };
  const BrideHouseLocation = {
    name: "Gigi House",
    address: "2/162 , Naranthi villai veedu , Puthukkadai Post .",
    time: "Friday, May 23rd, 2025 at 9:00 AM",
    mapUrl: "https://maps.app.goo.gl/b2UaYhTCL2i7WofA7"
  };
  const ReceptionLocation = {
    name: "St Fathhima Matha Community Hall",
    address: "Kandervilagam , Vanniyakudy Post",
    time: "Friday, May 23rd, 2025 at 5:00 PM",
    mapUrl: "https://maps.app.goo.gl/Rj1hURGVckyxYadJ8"
  };

  const buttonStyle = (type) => ({
    backgroundColor: "#fff",
    color: "#000",
    boxShadow:
      selected === type
        ? "inset 0 2px 6px rgba(0, 0, 0, 0.3)" // Inset shadow for selected
        : "0 2px 6px rgba(0, 0, 0, 0.2)",     // Normal shadow for deselected
    borderRadius: "8px",
    padding: "4px 20px",
    textTransform: "none",
    fontWeight: "bold",
    margin :'20px 0',
    transition: "all 0.2s ease-in-out",
  });

  return (
    <>
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h1
                className="text-2xl md:text-3xl lg:text-5xl m-4 font-medium text-center"
                style={{ fontFamily: "Playwrite DK Loopet, cursive" }}
            >
                About the Day
            </h1>

            <Box className='flex justify-center gap-1 '>
                <Button
                    onClick={() => setSelected("bride")}
                    sx={buttonStyle("bride")}
                >
                    Bride
                </Button>
                <Button
                    onClick={() => setSelected("groom")}
                    sx={buttonStyle("groom")}
                >
                    Groom
                </Button>
            </Box>
            <div className='flex flex-col-reverse md:flex-row items-center' >
                
                <div className='w-full md:w-[50%] flex flex-col items-center'>
                    <h4
                        className="text-xl md:text-2xl lg:text-3xl m-4 font-medium text-center text-amber-500"
                        style={{ fontFamily: "Playwrite DK Loopet, cursive" }}
                    >
                        Click the Image to be Navigated to {selected === 'bride' ? 'Bride' :'Groom'} house
                    </h4>
                    <h5 className="text-lg md:text-1xl lg:text-2xl m-2 font-medium text-center"  style={{ fontFamily: "Playwrite DK Loopet, cursive" }}>
                        {selected === 'bride' ?BrideHouseLocation.name : GroomHouseLocation.name}
                    </h5>
                    <h5 className="text-lg md:text-1xl lg:text-2xl m-2 font-medium text-center"  style={{ fontFamily: "Playwrite DK Loopet, cursive" }}>
                        {selected === 'bride' ?BrideHouseLocation.address : GroomHouseLocation.address}
                    </h5>
                    <h5 className="text-lg md:text-1xl lg:text-2xl m-2 font-medium text-center"  style={{ fontFamily: "Playwrite DK Loopet, cursive" }}>
                        {selected === 'bride' ?BrideHouseLocation.time : GroomHouseLocation.time}
                    </h5>
                    <img src={arrow} alt=""  className='w-[100px]'/>
                </div>
                <div className='w-full md:w-[40%]'>
                    <a
                        href={selected === 'bride' ?BrideHouseLocation.mapUrl : GroomHouseLocation.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={house} alt="" />
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-[40%]'>
                    <a
                        href={churchLocation.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={Church} alt="" />
                    </a>
                </div>
                <div className='w-full md:w-[50%] flex flex-col items-center'>
                    <h4
                        className="text-xl md:text-2xl lg:text-3xl m-4 font-medium text-center text-amber-500"
                        style={{ fontFamily: "Playwrite DK Loopet, cursive" }}
                    >
                        Click the Image to be Navigated to Church
                    </h4>
                    <h5 className="text-lg md:text-1xl lg:text-2xl m-2 font-medium text-center"  style={{ fontFamily: "Playwrite DK Loopet, cursive" }}>
                        {churchLocation.name}
                    </h5>
                    <h5 className="text-lg md:text-1xl lg:text-2xl m-2 font-medium text-center"  style={{ fontFamily: "Playwrite DK Loopet, cursive" }}>
                        {churchLocation.address}
                    </h5>
                    <h5 className="text-lg md:text-1xl lg:text-2xl m-2 font-medium text-center"  style={{ fontFamily: "Playwrite DK Loopet, cursive" }}>
                        {churchLocation.time}
                    </h5>
                    <img src={arrow} alt=""  className='w-[100px] rotate-90'/>
                </div>
            </div>


            <div className='flex flex-col-reverse md:flex-row items-center'>
                
                <div className='w-full md:w-[50%] flex flex-col items-center'>
                    <h4
                        className="text-xl md:text-2xl lg:text-3xl m-4 font-medium text-center text-amber-500"
                        style={{ fontFamily: "Playwrite DK Loopet, cursive" }}
                    >
                        Click the Image to be Navigated to Reception
                    </h4>
                    <h5 className="text-lg md:text-1xl lg:text-2xl m-2 font-medium text-center"  style={{ fontFamily: "Playwrite DK Loopet, cursive" }}>
                        {ReceptionLocation.name}
                    </h5>
                    <h5 className="text-lg md:text-1xl lg:text-2xl m-2 font-medium text-center"  style={{ fontFamily: "Playwrite DK Loopet, cursive" }}>
                        {ReceptionLocation.address}
                    </h5>
                    <h5 className="text-lg md:text-1xl lg:text-2xl m-2 font-medium text-center"  style={{ fontFamily: "Playwrite DK Loopet, cursive" }}>
                        {ReceptionLocation.time}
                    </h5>
                </div>
                <div className='w-full md:w-[40%]'>
                    <a
                        href={churchLocation.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={stage} alt="" />
                    </a>
                </div>
            </div>
        </div>

        </div>
        <div className='w-screen bg-black flex justify-end gap-2 items-center'>
            <PiArrowFatLinesRightFill className='text-white'/>
            <h6 className='text-end text-white pr-6 py-1 font-bold text-xs'><a href="https://portfolio-git-main-berglins-projects.vercel.app/" target='_blank'>Designed and developed by :  Berglin</a> </h6>
        </div>
    </>
  );
};


const FifthPage = () => {
  return (
    <>
        <LocationPage/>
    </>
  )
}

export default FifthPage