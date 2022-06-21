import React from 'react'
import Navbar from '../Navbar'
import bgimg1 from '../images/Group1422.png'

const Training = () => {
  return (
    <div style={{backgroundImage:`url(${bgimg1})`, height:'100vh'}} className='fontLink'>
              <Navbar btn_color='#FFD33D'/>
              <h2 style={{fontWeight:'700', color:'#6D84FC',marginLeft:'3em', fontSize:'55px', marginBottom:'50px'}}>Build or restart your career with us</h2>
              <p style={{fontSize:'40px', maxWidth:'956px',marginLeft:'4em', color:'#707070'}}>Jobs Territory will help you to achieve your career goals and dreams with industry-recognized learning paths.</p>
              <p  style={{fontSize:'30px', maxWidth:'730px',marginLeft:'6em', color:'#707070', marginTop:'70px'}}>Browse around our industry certified learning material, which help you UP your game!</p>
              <form class="row g-3">
 
  <div class="col-auto">
    <label for="email" class="visually-hidden">E-mail</label>
    <input type="email" class="form-control" id="inputPassword2" placeholder="Search Trainings" style={{ width:'30vw' ,marginLeft:'180px'}}/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn mb-3" style={{backgroundColor:'#FFD33D', color:'white',borderRadius:'10px'}}>Search</button>
  </div>
</form>

    </div>
  )
}

export default Training