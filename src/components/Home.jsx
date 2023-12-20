import React from 'react';
import santiFoto from "../assets/santiImage.jpg";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-scroll";

export const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full mt-14'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                            I'm a frontend developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'> Hi, I'm a fullstack MERN developer with experience in building web applications using MongoDB, Express, React, and Node.js.
                    </p> 
                    <div style={{ clear: 'both' }}>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'> 
                                <RiArrowRightSFill size={22} className='ml-1' />
                            </span>
                        </Link>                    
                    </div>
                </div>
                <div className='mb-10 fotoSanti'>
                    <img src={santiFoto} alt="miporfolio" className='rounded-2xl mx-auto md:w-full '/>
                </div>
            </div>
        </div>
    )
}

export default Home;
