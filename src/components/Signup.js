import React from 'react'
import SignupForm from './SignupForm'
import bgimg from '../images/bgimg1.png'
import Navbar from '../Navbar'

const Signup = () => {
  return (
            <div style={{backgroundColor:'#E7E7E7'}}> 
            
    <div style={{backgroundImage:`url(${bgimg})`, height:'100vh'}}>
    <Navbar nav_txt_col='#202833' btn_color='#FFCF2B'/>
              <SignupForm/>
    </div>
    </div>
  )
}

export default Signup