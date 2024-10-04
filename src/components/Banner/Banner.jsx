
import React from 'react'
import Banner2 from "../../assets/Places/Banner2.png"
import { IoIosWifi } from 'react-icons/io';
import { IoFastFoodSharp } from 'react-icons/io5';
import { MdFlight, MdOutlineLocalHotel } from 'react-icons/md';

    
const Banner = () => {
    
  return (
    <div className='min-h-[550px] bg-gray-100'>
        <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    <div data-aos="flip-up">
                        <img src={Banner2} alt="" data-aos="fade-up" 
                        className='max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)]
                        object-cover pr-10 alt="Image">
    '/>
                    </div>
                    <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                        <h1 data-aos="fade-up" className='text-3xl font-bold sm:text-3xl tracking-wide '>Explore the India and Indian Culture</h1>
                        <p data-aos="fade-up" className='text-slate-500 
                        hover:text-blue-950 font-serif tracking-wide leading-6'>
                            India is renowned for its rich cultural heritage, encompassing diverse languages, religions, cuisines, and traditions, with vibrant festivals like Diwali, Holi, and Eid. Its classical arts, such as Bharatanatyam, Kathak, and music genres like Hindustani and Carnatic, are celebrated globally.
                        </p>
                        <p data-aos="fade-up" className='text-slate-500 font-serif hover:text-blue-950 tracking-wide leading-6'>
                            India's diverse culture and spirituality are reflected in its unique regional experiences, from the iconic Taj Mahal in Agra to the spiritual hub of Varanasi along the Ganges. The tranquil backwaters of Kerala and the majestic forts of Jaipur further showcase India's rich history and architectural brilliance.
                        </p>
                        <div data-aos="zoom-in" className='grid grid-cols-2 gap-6 pb-5'>
                            <div className='space-y-6'>
                                <div className='flex items-center gap-4'>
                                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-300"/>
                                    <p>Flight</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-pink-300"/>
                                    <p>Hotel</p>
                                </div>
                            </div>
                            <div className='space-y-6'>
                                <div className='flex items-center gap-4'>
                                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-300"/>
                                    <p>Wi-Fi</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-300"/>
                                    <p>Foods</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
