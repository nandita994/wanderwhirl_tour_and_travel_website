import React from 'react'
import Video1 from "../../src/assets/Video1.mp4"
import Hero from '../components/Hero/Hero'
import Places from '../components/Places/Places'
import BannerImg from '../components/BannerImg/BannerImg'
import Banner3 from "../assets/Places/Banner3.jpg"
import Banner1 from "../assets/Places/Banner1.jpg"
import Blogs from './Blogs';
import Banner from '../components/Banner/Banner';
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import OrderPopup from '../components/OrderPopup/OrderPopup.jsx'


const Home = () => {
  const [orderPopup, setOrderPopup]=React.useState(false);
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);};
  return (
    <div>
      <div className='relative h-[700px]'>
          
            <video autoPlay
              loop muted className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
              <source src={Video1} type="video/mp4"/>
            </video>
            <Hero/>
        </div>  
        <Places handleOrderPopup={handleOrderPopup}/>
        <BannerImg img={Banner3}/>
        <Blogs/>
        <Banner/>
        <BannerImg img={Banner1}/>
        <Testimonial/>
        <OrderPopup orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}/>
    </div>
    
  )
}

export default Home
