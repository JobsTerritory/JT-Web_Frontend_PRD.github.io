import React from 'react'
import bgimg1 from '../images/workshop2.png'
import bgimg2 from '../images/Rectangle224.png'
import Navbar from '../Navbar'
import BlogSub from './BlogSub'



const Blogs = () => {
  return (
   <div >
     <div style={{backgroundImage:`url(${bgimg1})`, height:'200px'}}>
       <Navbar nav_txt_col='#FFFFFF' btn_color='#FFCF2B'/>
     </div>
     <div style={{backgroundImage:`url(${bgimg2})`}}>
       <div className='fontLink' style={{fontWeight:'500', fontSize:'70px', marginLeft:'100px'}}>
         Blogs
         <button className='signupform btn' style={{fontWeight:'500', fontSize:'2vw', marginLeft:'1100px',
        backgroundColor:'#FFCF2B', borderRadius:'30px'}}>Publish your blog</button>
       </div>
     </div>
     <BlogSub/>
   </div>
    
  )
}

export default Blogs