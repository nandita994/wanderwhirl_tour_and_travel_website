import React from 'react'
import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt
} from "react-icons/fa";
import Video2 from "../../assets/Video2.mp4";
import {Link} from 'react-router-dom';

const FooterLinks=[
{
  title:"Home",
  link:"/",
},
{
  title:"About",
  link:"/about",
},

{
  title:"Best Places",
  link:"/best-places",
},
{
  title:"Blogs",
  link:"/blogs",
},
];

const FooterLinks2=[
  {
    title:"Terms & Conditions",
    link:"/",
  },
  {
    title:"Disclaimer",
    link:"/",
  },
  {
    title:"Privacy Policy",
    link:"/",
  },

];
const FooterLinks3=[
  {
    title:"We Are Hiring",
    link:"/",
  },
  {
    title:"Share Your Travel Experience",
    link:"/",
  },


];



const Footer = () => {
  return (
    <div className='py-10 relative overflow-hidden '>
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]">
          <source src={Video2} type="video/mp4"/>
      </video>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-5 bg-white/30 backdrop-blur-sm rounded-t-xl'>      
        <div>
          <h1 className='flex items-center gap-3
        text-xl sm:text-3xl font-bold text-justify sm:text-left'>
          <img src={logo} alt="" className='pl-5 max-h-[60px]'/>
        </h1>
        <p className='text-sm pl-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium mollitia sapiente dignissimos minus quas, consectetur, earum quod fugit quos, esse et laboriosam minima aperiam iste beatae reprehenderit officia tempore.</p>
        <br/>
        <div className='flex items-center gap-3 mt-3 pl-5'>
          <FaLocationArrow/>
          <p>Kolkata, West Bengal</p>
        </div>
        <div className='flex items-center gap-3 mt-3 pl-5'>
          <FaMobileAlt/>
          <p>+91 988956525</p>
        </div>
        <div>
          <div className='flex items-center pl-5 gap-3 mt-6 '>

            <a href="#">
              <FaInstagram className='text-3xl hover:bg-primary hover:rounded-full'/>
            </a>
            <a href="#">
              <FaFacebook className='text-3xl hover:bg-primary hover:rounded-full'/>
            </a>
            <a href="#">
              <FaLinkedin className='text-3xl hover:bg-primary hover:rounded-full'/>
            </a>
          </div>
        </div>
      </div>
      {/*footer links*/}
        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 ms:pl-10'>
          {/*first col link*/}
          <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
              <ul>
                {
                  FooterLinks.map(({title,link})=>(
                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-950'>
                      <Link to={link}
                      onClick={()=>{
                        window.scrollTo(0,0);
                      }}>
                      <span>&#11162;</span>
                      <span>{title}</span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          {/*second col link*/}
          <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Legal Policy</h1>
              <ul>
                {
                  FooterLinks2.map(({title,link})=>(
                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-950'>
                      <Link to={link}
                      onClick={()=>{
                        window.scrollTo(0,0);
                      }}>
                      <span>&#11162;</span>
                      <span>{title}</span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          {/*third link*/}
          <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Other Services</h1>
              <ul>
                {
                  FooterLinks3.map(({title,link})=>(
                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-950'>
                      <Link to={link}
                      onClick={()=>{
                        window.scrollTo(0,0);
                      }}>
                      <span>&#11162;</span>
                      <span>{title}</span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
    </div>
    <div>
      <div className='text-center py-5 border-t-2 border-gray-300/50 bg-slate-950 text-white'>
                copyright© 2024 All rights reserver || Made by Nandita Dutta
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer
