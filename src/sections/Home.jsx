import React from 'react';
import { IoCaretDown } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';

const Home = () => {
    return (
        <section
            name='home'
            className=' w-full bg-gradient-to-b from-white to-blue-100 overflow-hidden max-w-screen-ms h-screen'
        >
            <div className=' container overflow-hidden'>
                <div
                    className='absolute top-[10%] left-[10%] w-40 h-40 md:w-80 md:h-80 opacity-70 
            rounded-full bg-yellow-100 mix-blend-multiply 
            filter blur-xl animate-blob  z-0 pointer-events-none'
                />

                <div
                    className='absolute bottom-[20%] right-[25%] w-40 h-40 md:w-80 md:h-80 opacity-70 
            rounded-full bg-red-200 mix-blend-multiply 
            filter blur-xl animate-blob  animation-delay-4 z-0 pointer-events-none'
                />

                <div
                    className='absolute bottom-[40%] left-1/4 w-40 h-40 md:w-80 md:h-80 opacity-70 
            rounded-full bg-blue-200 mix-blend-multiply 
            filter blur-xl animate-blob  animation-delay-4 z-0 pointer-events-none'
                />

                <div
                    className='absolute top-[70%] right-2/4 w-40 h-40 md:w-80 md:h-80 opacity-70 
            rounded-full bg-green-200 mix-blend-multiply 
            filter blur-xl animate-blob  animation-delay-6 z-0 pointer-events-none'
                />

                <div
                    className='absolute bottom-2/4 right-1/4 w-40 h-40 md:w-80 md:h-80 opacity-70 
            rounded-full bg-gray-300 mix-blend-multiply 
            filter blur-xl animate-blob  z-0 pointer-events-none'
                />

                <div
                    className='absolute top-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 opacity-70 
            rounded-full bg-orange-200 mix-blend-multiply 
            filter blur-xl animate-blob animation-delay-6 z-0 pointer-events-none'
                />
            </div>

            <div className='flex flex-col items-center justify-center h-full'>
                <div
                    className='z-10 mx-10 flex flex-col items-center justify-center h-3/6 w-full px-4 
                md:flex-row md:items-center md:justify-center'
                >
                    <div className='md:text-[12rem] text-7xl ml-0 pl-0 font-bold font-roboto bg-clip-text pt-28 flex text-center'>
                        Kishan Yerneni
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center h-1/6 w-full px-4 md:flex-row md:items-center md:justify-center space'>
                    <a
                        href='https://drive.google.com/file/d/1mLquEw_fQOEQg7JYsJfTKEFOBJZKLwUw/view?usp=sharing'
                        target='_blank'
                        rel='noreferrer'
                        className='text-3xl bg-slate-200 h-20 w-28 flex justify-center items-center cursor-pointer rounded-3xl
                    shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 hover:scale-105 
                    hover:shadow-2xl hover:text-slate-600 z-10 mr-10 mt-10 duration-200'
                    >
                        <button>
                            <IoIosPaper
                                size={45}
                                className='text-3xl'
                            ></IoIosPaper>
                        </button>
                    </a>
                    <a
                        className='text-3xl bg-slate-200 h-20 w-28 flex justify-center items-center cursor-pointer rounded-3xl
                    shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 hover:scale-105 
                    hover:shadow-2xl duration-200 hover:text-red-400 z-10 mr-10 mt-10'
                        rel='noreferrer'
                        href='https://github.com/KishanYern'
                        target='_blank'
                    >
                        <button>
                            <FaGithub size={45} className='text-3xl' />
                        </button>
                    </a>
                    <a
                        className='text-3xl bg-slate-200 h-20 w-28 flex justify-center items-center cursor-pointer rounded-3xl
                    shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 hover:scale-105 
                    hover:shadow-2xl duration-200 hover:text-blue-700 z-10 mr-10 mt-10'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/kishan-yerneni/'
                        target='_blank'
                    >
                        <button>
                            <FaLinkedin size={45} className='text-3xl' />
                        </button>
                    </a>
                </div>
                <div className='text-3xl text-gray-500 mt-32 relative'>
                    <IoCaretDown
                        size={40}
                        className='animate-bounce absolute top-10 right-1/2 z-20'
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
