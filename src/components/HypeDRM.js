import React from 'react'
import img1 from '../images/hypeDRM/Group 422.png'
import img2 from '../images/hypeDRM/Group 242.png'
import img3 from '../images/hypeDRM/Group 241.png'
import img4 from '../images/hypeDRM/Group 423.png'
import img5 from '../images/hypeDRM/Group 424.png'
import img6 from '../images/hypeDRM/Group 425.png'
import img7 from '../images/hypeDRM/Group 426.png'
import img8 from '../images/hypeDRM/Group 427.png'
import { BrowserView, MobileView } from 'react-device-detect'
const HypeDRM = () => {
  return (
    <div>
              <div className='fontLink ind-we-cater1'>WHAT'S THE HYPE BEHIND JOB TERRITORY'S DRM</div>
              <BrowserView>
              <div className="fontlink container" style={{color:"#535353", marginLeft:'13vw'}}>
  <div className="row align-items-start">
    <div className="col-3" style={{marginRight:'5vw'}}>
      <img className='ind-we-cater-icon' src={img1}></img>
      <h5>Hire as many as you want through monthly </h5>
    </div>
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img2} ></img>
          <h5>Get a privilege to choose the best resources and personnel for your Company </h5>

    </div>
    <div className="col-3">
    <img className='ind-we-cater-icon' src={img3} ></img>
          <h5>HR Expertise Guidance </h5>

    </div>
  </div>
  <div className="row align-items-center">
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img4} ></img>
          <h5>No more middleman; interact with your dedicated   </h5>

    </div>
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img5}></img>
          <h5>Exclusively skilled personnel {"&"} resources are set aside for your  </h5>

    </div>
    <div className="col-3" style={{marginRight:'5vw', marginTop:'-2vw'}}>
    <img className='ind-we-cater-icon' src={img6} ></img>
          <h5>No long term Contract</h5>

    </div>
  </div>
  <div className="row align-items-end">
    <div className="col-3" style={{marginRight:'5vw', marginLeft:'10vw'}}>
    <img className='ind-we-cater-icon'  src={img7} ></img>
          <h5>Completes all your hiring</h5>

    </div>
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img8} ></img>
          <h5>Nominal budget with
     lowered fill time</h5>

    </div>
  </div>
</div>
</BrowserView>
<MobileView>
<div className="fontlink container" style={{color:"#535353"}}>
  <div className="row align-items-start">
    <div className="col-5" style={{marginRight:'5vw'}}>
      <img className='ind-we-cater-icon' src={img1}></img>
      <h6  className='int-page-pic-icons-txt'>Hire as many as you want through monthly </h6>
    </div>
    <div className="col-5" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img2} ></img>
          <h6 className='int-page-pic-icons-txt'>Get a privilege to choose the best resources and personnel for your Company </h6>

    </div>
   
  </div>
  <div className="row align-items-start">
    <div className="col-5" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img4} ></img>
          <h6  className='int-page-pic-icons-txt'>No more middleman; interact with your dedicated   </h6>

    </div>
    <div className="col-5" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img5}></img>
          <h6 style={{textAlign:'center',paddingLeft:'10vw'}}>Exclusively skilled personnel {"&"} resources are set aside for your  </h6>

    </div>
   
  </div>
  <div className="row align-items-start">
    <div className="col-5" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon'  src={img7} ></img>
          <h6  className='int-page-pic-icons-txt' >Completes all your hiring</h6>

    </div>
    <div className="col-5" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img8} ></img>
          <h6  className='internal-page-pic-icons-txt'>Nominal budget with
     lowered fill time</h6>

    </div>
    <div className='row align-items-start'>
    <div className="col-5">
    <img className='ind-we-cater-icon' src={img3} ></img>
          <h6  className='int-page-pic-icons-txt'>HR Expertise Guidance </h6>

    </div>
    <div className="col-5" style={{marginRight:'5vw', marginTop:'-2vw'}}>
    <img className='ind-we-cater-icon' src={img6} ></img>
          <h6 style={{textAlign:'center',paddingLeft:'10vw'}}>No long term Contract</h6>

    </div>

    </div>
  </div>
</div>
</MobileView>
    </div>
  )
}

export default HypeDRM ;