import React from 'react';
import PlaceCard from './PlaceCard';
import Img1 from "../../assets/Places/p1.jpg";
import Img2 from "../../assets/Places/p2.jpg";
import Img3 from "../../assets/Places/p3.jpg";
import Img4 from "../../assets/Places/p4.jpeg";
import Img5 from "../../assets/Places/p5.jpeg";
import Img6 from "../../assets/Places/p6.jpg";


const PlaceData=[
  {
    img:Img1,
    title:"Taj Mahal",
    location:"Agra, India",
    description:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
    price:"₹ 51,000 onwards",
    type:"Cultural relax",
  },
  {
    img:Img2,
    title:"Kashmir",
    location:"Jammu & kashmir",
    description:"Kashmir is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term 'Kashmir' denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range.Popularly referred to as the 'Paradise on Earth,' Kashmir is a breathtaking region in northwestern India.",
    price:"₹ 78,000 onwards",
    type:"Cultural relax",
  },
  {
    img:Img3,
    title:"Ladakh",
    location:" Union Territory ",
    description:"Ladakh, located in the northernmost region of India, is a high-altitude desert renowned for its breathtaking landscapes, serene monasteries, and unique cultural heritage. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. ",
    price:"₹ 45,000 onwards",
    type:"Cultural relax",
  },
  {
    img:Img4,
    title:"Kerala",
    location:"Kerala",
    description:"Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers. ",
    price:"₹ 52,000 onwards",
    type:"Cultural relax",
  },
  {
    img:Img5,
    title:"Goa",
    location:"India",
    description:"Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
    price:"₹ 39,000 onwards",
    type:"Cultural relax",
  },
  {
    img:Img6,
    title:"Varanasi",
    location:"Varanasi, Uttar Pradesh",
    description:"Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva.",
    price:"₹ 32,000 onwards",
    type:"Religious place",
  },
];
const Places  = ({ handleOrderPopup }) => {
  return (
    <>
    <div data-aos="fade" data-aos-duration="800" className='dark:bg-gray-900 dark:text-white bg-gray-50 py-10'>
      <div className="container">
        <h1 className='my-8 border-l-8 
        border-primary/50 py-2 pl-2 text-3xl font-bold'>
          Best Places to Visit
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {PlaceData.map((item,index) => (
            <PlaceCard
            handleOrderPopup={handleOrderPopup}
            key={index}
            {...item}/>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Places;
