import React from 'react'
import Location from "../components/Location/Location.jsx"
const About = () => {
  return (
    <div className='container pt-14'>
      <div className='py-10'>
      <h1 className='inline-block border-l-8 border-primary/50 py-2
                pl-2 mb-4 text-xl font-bold sm:text-3xl'>        About us
        </h1>
        <p className='font-extralight'>
        Wander Whirl is an innovative tour and travel company dedicated to providing unforgettable travel experiences. Their website offers a seamless and user-friendly interface, allowing travelers to explore a variety of destinations, packages, and personalized itineraries. With detailed descriptions, stunning visuals, and customer reviews, users can make informed decisions about their travel plans. Whether you're looking for an adventurous trek, a relaxing beach vacation, or an immersive cultural experience, Wander Whirl's extensive range of options caters to diverse preferences and interests.
        </p>
        <p className='font-extralight'>
        Beyond its comprehensive trip planning tools, Wander Whirl's website also features a blog filled with travel tips, destination guides, and insider advice to enhance your journey. The company prides itself on exceptional customer service, ensuring every traveler's needs are met with personalized attention. With secure booking options and transparent pricing, Wander Whirl aims to make travel planning stress-free and enjoyable. Their commitment to sustainability and responsible tourism further sets them apart, encouraging travelers to explore the world while preserving its natural and cultural heritage.
        </p>
      </div>
      <Location/>
    </div>
  )
}

export default About
