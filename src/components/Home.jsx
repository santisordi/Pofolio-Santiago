import React from 'react';
import HeroImage from "../assets/santiImage.jpg";
import { RiArrowRightSFill } from "react-icons/ri";

export const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        Hola, soy desarrollador Frontend
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'> Hace más de 1 año que estoy estudiando para convertirme en FullStack. Actualmente trabajo en mis proyectos usando tecnologías como React, Tailwind, Bootstrap, Next JS.
                    </p> 
                    <div style={{ clear: 'both' }}>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'> 
                                <RiArrowRightSFill size={22} className='ml-1' />
                            </span>
                        </button>                    
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="miporfolio" className='rounded-2xl mx-auto '/>
                </div>
            </div>
        </div>
    )
}
