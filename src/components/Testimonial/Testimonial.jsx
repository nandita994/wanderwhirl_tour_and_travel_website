import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const TestimonialData=[
    {
        id:1,
        name:"Ravi Prasad",
        text:"Our Varanasi tour was an unforgettable experience! From the mesmerizing Ganga Aarti to the serene boat ride on the Ganges, every moment was magical. The guide was incredibly knowledgeable, sharing fascinating insights about the city's rich history and culture. The accommodations were comfortable and conveniently located. Overall, the trip was well-organized and exceeded our expectations. We can't wait to book our next adventure with your travel service!",
        img:"https://www.divyanholidays.com/wp-content/uploads/2021/09/varanasi.jpg",
    },
    {
        id:2,
        name:"Samrat D",
        text:"Our 7days tour of Kashmir was breathtaking! The scenic beauty and hospitality exceeded our expectations, making it a memorable trip. The tour service was exceptional, handling everything smoothly.",
        img:"https://punetours.com/wp-content/uploads/2017/10/kashmir-tour-honeymoon-package-booking.jpg",
    },
    {
        id:3,
        name:"Sumi Sharma",
        text:"Our Ladakh tour was an unforgettable experience! The breathtaking landscapes, expertly guided excursions, and seamless travel arrangements made it a trip of a lifetime. The service was exceptional, and every detail was taken care of. Highly recommend this tour to anyone looking to explore the beauty of Ladakh!",
        img:"https://imgcld.yatra.com/ytimages/image/upload/v1464244517/Ladakh_overview.jpg",
    },
    {
        id:4,
        name:"Priya & Raj",
        text:"We had an amazing time exploring Kerala with this travel service! From the lush tea plantations in Munnar to the vibrant markets in Kochi, every moment was special. The accommodations were comfortable, and the staff was incredibly accommodating. Thank you for an unforgettable adventure!",
        img:"https://cdn.kimkim.com/files/a/content_articles/featured_photos/fbdebcfadec1546418836b917b252e75e678b6ba/big-a0f9c5581be5f2db211a093bdfedd2b4.jpg",
    },
];

const Testimonial = () => {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
        {
          breakpoint: 10000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <div className='py-10'>
        <div className='container'>
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <h1 className='text-3xl text-gray-500'>Testimonial</h1>
                <p className='text-l text-gray-500'>
                    {" "}
                    "Traveler Testimonials: From Dreams to Destinations."<br/>
                    "Explore the World Through Our Clients' Eyes."
                </p>
            </div>
            {/* testimonial section*/}
            <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6">
              <Slider {...settings}>
                  {
                      TestimonialData.map(({id,name,text,img})=>
                      {
                          return(
                              <div key={id} className='my-6 '>
                                  <div
                                      className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative'>
                                          <img src={img}
                                              alt=""     
                                              className='rounded-full block mx-auto'/>
                                              <h1 className='text-xl font-bold'>{name}</h1>
                                              <p className='text-gray-500 text-sm'>{text}</p>
                                              <p className='text-black/50 font-serif absolute top-0 right-0 text-9xl'>,,</p>
                                  </div>
                              </div>
                          );
                      })
                  }
              </Slider>
          </div>
        </div>
    </div>
  );
};

export default Testimonial;
