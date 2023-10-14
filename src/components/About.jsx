import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20 max-sm:mt-10'>
                    Hello, This is Vighnesh, I am pursuing B.Tech 3rd year in Vellore Institute of Technology, Amaravathi, on the course Computer science and engineering with specilization in Artificial intelligence and meachine learning
                </p>
                <br />
                
            </div>
        </div>
    )
}

export default About
