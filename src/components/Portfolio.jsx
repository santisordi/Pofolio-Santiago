import React from 'react';
import reactPorfolio from "../assets/portfolioimg/PoryectoReactJS-Porfolio.png";
import webLucrecia from "../assets/portfolioimg/ProyectoWeb-La Lucrecia.png";
import reactRegionales from "../assets/portfolioimg/ProyectoReactJS-Regionales.png";
import jsCotizador from "../assets/portfolioimg/ProyectoJS-CotizadorSeguros.png";

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: reactPorfolio
    },
    {
      id: 2,
      src: webLucrecia
    },
    {
      id: 3,
      src: reactRegionales
    },
    {
      id: 4,
      src: jsCotizador
    }
  ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Porfolio</p>
            <p className='py-6'>Mira alguno de mis trabajos</p>
          </div>
          <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              {
                portfolios.map(({id, src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                      <img src={src} alt='imagen proyecto react porfolio' className='rounded-md duration-200 hover:scale-105'/>
                      <div className='flex justify-center items-center'>
                          <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</button>
                          <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</button>
                      </div>
                    </div>                    
                ))
              }
          </div>
        </div>
    </div>
  )
}

export default Portfolio;