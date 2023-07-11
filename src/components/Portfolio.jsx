import React from 'react';
import reactPorfolio from "../assets/portfolioimg/PoryectoReactJS-Porfolio.png";
import webLucrecia from "../assets/portfolioimg/ProyectoWeb-La Lucrecia.png";
import reactRegionales from "../assets/portfolioimg/ProyectoReactJS-Regionales.png";
import jsCotizador from "../assets/portfolioimg/ProyectoJS-CotizadorSeguros.png";
import bsCoinbaseWeb from "../assets/portfolioimg/bsCoinbaseWeb.png";

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: reactPorfolio,
      demoHref: "https://santiagosordiportfolio.netlify.app/",
      codeHref: "https://github.com/santisordi/ReactPorfolio-Santiago"
    },
    {
      id: 2,
      src: webLucrecia,
      demoHref: "https://app.netlify.com/sites/lalucrecia/overview",
      codeHref: "https://github.com/santisordi/DesarrolloWeb-LaLucrecia"
    },
    {
      id: 3,
      src: reactRegionales,
      demoHref: "https://dydregionales.netlify.app/",
      codeHref: "https://github.com/santisordi/ReactJs-Ecommerce-D-D"
    },
    {
      id: 4,
      src: jsCotizador,
      demoHref: "https://app.netlify.com/sites/cotizadorseguroscoder/overview",
      codeHref: "https://github.com/santisordi/JavaScrip-CotizadorSeguros"
    },
    {
      id: 6,
      src: bsCoinbaseWeb,
      demoHref: "https://replicasitiocoinbasebootstrap.netlify.app/",
      codeHref: "https://github.com/santisordi/DesarrolloWeb-ReplicaCoinbase"
    }
  ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500'>Porfolio</p>
            <p className='py-6'>Checkout here some of my works!</p>
          </div>
          <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              {
                portfolios.map(({id, src, demoHref, codeHref}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                      <img src={src} alt='imagen proyecto react porfolio' className='rounded-md duration-200 hover:scale-105'/>
                      <div className='flex items-center justify-center'>
                      <a href={demoHref} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</a>
                <a href={codeHref} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</a>
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