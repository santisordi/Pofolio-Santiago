import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dicta nulla quidem illo quisquam aut esse modi nisi commodi sequi eaque dolore pariatur omnis fuga necessitatibus, architecto facere eum, repudiandae ducimus provident molestiae voluptas magnam corporis. Ex consectetur provident nisi accusantium recusandae. Id quam corrupti sed, harum ratione optio excepturi.
            </p>

            <br />

            <p className='text-xl' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, quaerat illum. Libero suscipit repudiandae accusantium dolorem totam iure, aut sit, odio eaque rem cupiditate dolores. Expedita odio sequi asperiores error minima at ipsam voluptate sint repudiandae neque vero molestias perferendis, nesciunt, laudantium voluptates architecto incidunt ab similique molestiae, quam id.
            </p>
        </div>
    </div>
  )
}

export default About