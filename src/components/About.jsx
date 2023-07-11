import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 sm:mt-10 sm:pb-0'>
                    <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='mt-3 sm:text-xl sm:mt-20'>I have been studying programming for over a year now, and it has been an incredible journey of growth and learning. During this time, I have dedicated countless hours to honing my skills and becoming proficient in various programming languages and frameworks.

                I am proud to say that I have already achieved a significant milestone in my programming journey. I recently completed my studies and obtained a degree as a frontend developer. This achievement showcases my ability to create visually appealing and user-friendly interfaces while implementing designs effectively.
                </p>

                <br />

                <p className='mt-3 sm:text-xl sm:mt-20' >
                However, my passion for programming doesn't stop there. I am currently focusing on expanding my knowledge and capabilities by delving into backend development. I am excited to learn about the server-side aspects of web development, including working with databases and building the logical components that power applications.

                By combining my frontend and backend development skills, I aim to become a well-rounded and versatile programmer. I am committed to continuously improving my skills and staying updated with the latest industry trends and technologies. Programming is not just a career for me; it's a lifelong journey of constant growth and exploration.
                </p>
            </div>
        </div>
    )
}

export default About;