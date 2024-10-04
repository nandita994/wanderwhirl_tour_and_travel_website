import React from 'react'
import {Link} from "react-router-dom";

const BlogCard = ({image,title,description,author,date}) => {
  return (
    <>
    <Link to={`/blogs/${title}`}
    onClick={() => {
      window.scrollTo(0,0);
    }}
    state={{image,date,title,description,author}}
    >
    <div className='shadow-lg shadow-green-500/50 transition-all duration-500 pl-20 py-10 grid grid-cols-2 hover:shadow-xl cursor-pointer '>
      <div className='overflow-hidden'>
        <img src={image} 
        alt="img" className='mx-auto h-[250px] w-full
         object-cover transition duration-700 hover:skew-y-2 hover:scale-120'/>
      </div>
      <div className='space-y-2 p-2'>
      <h1 className='line-clamp-1 font-bold text-xl'>{title}</h1>
      <p className='line-clamp-6'>{description}</p>
      <div className='text-right'>
        <p>{author}</p>
        <p>{date}</p>
      </div>
      </div>
      
    </div>
    </Link>
    </>
  )
 
}

export default BlogCard;
