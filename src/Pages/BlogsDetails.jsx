import React from 'react'
import {useLocation} from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location=useLocation();
  console.log(props,"props");
  console.log(location,"useLocation Hook");
  const{image, title, description, author, date}=location.state;

  return (
    <div className='min-h-[550px] pt-20'>
      <div className='h-[450px] overflow-hidden'>
        <img 
        src={image}
        alt=" "
        className='mx-auto h-[500px] w-full 
        object-cover transition duration-700 
        hover:scale-110'>
        </img>
      </div>
        <div className='container-pb-14'>
            <p className='text-slate-600 text-sm py-3'>
              {" "}
              written by {author} on date {date}
            </p>
            <h1 className='text-2xl font-semibold mb-10'>{title}</h1>
            <p>{description} </p>
        </div>
        <BlogsComp/>
    </div>
  )
}

export default BlogsDetails
