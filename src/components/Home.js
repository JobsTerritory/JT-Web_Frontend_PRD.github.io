import React from 'react'
import Navbar from '../Navbar'
import img1 from '../images/homeimg1.png'
import img2 from '../images/homeimg2.png'
import Home2nd from './Home2nd'
import RecrServices from '../components/RecrServices'
import services from '../images/Group424.png'
import Testimonialcar from './TestimonialCar'
import { Footer } from '../footer/footer'
import CompaniesIWC from './CompaniesIWC'
import Clients from './Clients'

const Home = () => {
  return (
    <div className='desktopHome fontLink' >
      <div style={{height:'1000px'}}>
              <Navbar btn_color='white' nav_txt_col='black'/>
              <div className='row'>
                        <div className='col md-1 homediv1' >
                                  <p className='fontLink homepara1'>Bridging between <p style={{fontSize:'2.5vw', maxWidht:'30vw', paddingTop:'1vw'}}> " Seekers and Seeking " </p></p>
                                  <p className='fontLink homepara2' >A recruiting site where Amazing talent meets Inspiring Visionary.</p>
                                  <p className='fontLink homepara3'>Get ready to cumulate your Dream Team with us!</p>

                        </div>
                        <div className='col md-1' style={{maxWidth:"650px"}}>
                       <img className='homeImg1' src={img1}></img>
                       <img className='homeImg2'  src={img2}></img>
 </div> 
              </div>
           </div>   
              <Home2nd/>
              
              <Clients/>
              <Testimonialcar/>
              <Footer/>
    </div>
  )
}

export default Home