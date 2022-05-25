import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../Navbar'
import bgimgdrm from '../images/bgimgdrm.png'
import TestimonialCar from './TestimonialCar'
import '../App.css'
import IndustryWeCater from './IndustryWeCater'
import bgImg from "../images/bgImg.png"
import HypeDRM from './HypeDRM'
import OurClients from './OurClients'
import { BrowserView, MobileView } from 'react-device-detect'
import img1 from '../images/hypeDRM/Group 422.png'
import img2 from '../images/hypeDRM/Group 242.png'
import img3 from '../images/hypeDRM/Group 241.png'
import img4 from '../images/hypeDRM/Group 423.png'
import img6 from '../images/hypeDRM/Group 425.png'

const PartTime = () => {
  return (
    <div>
      <Navbar btn_color='#FFC600' />
      <BrowserView>
              <div className='row'>
                <div className='col md-1 DRMcol1' >
                                   <img src="images/part-time.png" style={{marginLeft:'50px',width:'50vw',height:'476px'}} />

                  <div className='fontLink DRMtitle'>PART-TIME HRING SERVICES
</div>
                  <div className='fontLink DRMdesc'>
                  It might be overwhelming but, nothing feels more of a blessing than seeing your small business accelerating than you can manage. Constant expansion and changes in trends tend to surpass a business ability to hire full-time employees. In circumstances like these, part-time hiring comes to the rescue. With an abundance of benefits, if utilise your personnel sagely, a part-time workforce can help you grow your business tenfold.




                  </div>

                </div>
                <div className='col md-1'>
                  <div className='list-container'>
                    <div className='list-heading'>How JT can help you fulfill your job 
requirements</div>
                    <ul>
                      <li class="bi bi-check-circle-fill list-item">Allocates  you the best candidate 
as per your project requirement 
through our huge database
</li>
<li class="bi bi-check-circle-fill list-item">Saves your time by taking care of
everything during the whole 
hiring process.

</li>
<li class="bi bi-check-circle-fill list-item" >Conducts thorough background
checks when considering 
potential employees

</li>
<li class="bi bi-check-circle-fill list-item" >Our expertise and market 
knowledge proves to be priceless
</li>
<li class="bi bi-check-circle-fill list-item" >Negotiates on behalf of both 
parties to reach a mutual 
agreement
</li>

                    </ul>
                  </div>
                </div>
              </div>
              <div class='row' className='fontLink'>
                <div className='col md-1 drm-desc-container'>
                  <div className='drm-heading'>WHY SHOULD YOU OPT FOR IT</div>
                  <p className='drm-para'>With the help of Part-time employees, businesses can opt for flexible working hours at their convenience.  Part-timers are helpful in keeping your business thriving during the time of peak season. Moreover, these employees enable you to have a larger payroll and thriving diversity. Larger your human resources, more chances to claim opportunities. Thence, ensuring no more  hassle of dealing with employee turnover.




</p>
                </div>
                <img className='drm-img-bg' src={bgimgdrm} ></img>
              </div>
              {/* <HypeDRM/> */}
               <div className='fontLink ind-we-cater1'>WHAT'S THE HYPE BEHIND JOB TERRITORY'S PART TIME</div>
              <div className="fontlink container" style={{color:"#535353",marginLeft:'13vw'}}>
  <div className="row align-items-start">
    <div className="col-3" style={{marginRight:'5vw'}}>
      <img className='ind-we-cater-icon' src={img1}></img>
      <h5>Hire as many as you want through monthly </h5>
    </div>
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img2} ></img>
          <h5>Get a privilege to choose the best resources and personnel for your </h5>

    </div>
    <div className="col-3">
    <img className='ind-we-cater-icon' src={img3} ></img>
          <h5>HR expertise guidance </h5>

    </div>
  </div>
  <div className="row align-items-center">
    <div className="col-3" style={{marginRight:'5vw',marginLeft:'vw'}}>
    <img className='ind-we-cater-icon' src={img4} ></img>
          <h5>No more middleman; interact with your dedicated   </h5>

    </div>
    
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img6} ></img>
          <h5>No long term contract</h5>

    </div>
  </div>
</div>
              <IndustryWeCater/>
              <TestimonialCar />
              
              </BrowserView>
              <MobileView>
              <div className='fontLink DRMtitle'>PART-TIME HRING SERVICES
 </div>
              
              <div className='fontLink DRMdesc'>
              It might be overwhelming but, nothing feels more of a blessing than seeing your small business accelerating than you can manage. Constant expansion and changes in trends tend to surpass a business ability to hire full-time employees. In circumstances like these, part-time hiring comes to the rescue. With an abundance of benefits, if utilise your personnel sagely, a part-time workforce can help you grow your business tenfold.

 


                  </div>
                  <div className='list-container'>
                    <div className='list-heading'>How JT can help you fulfill your job 
requirements</div>
                    <ul>
                      <li class="bi bi-check-circle-fill list-item">Allocates  you the best candidate 
as per your project requirement 
through our huge database
</li>
<li class="bi bi-check-circle-fill list-item">Saves your time by taking care of
everything during the whole 
hiring process.

</li>
<li class="bi bi-check-circle-fill list-item" >Conducts thorough background
checks when considering 
potential employees

</li>
<li class="bi bi-check-circle-fill list-item" >Our expertise and market 
knowledge proves to be priceless
</li>
<li class="bi bi-check-circle-fill list-item" >Negotiates on behalf of both 
parties to reach a mutual 
agreement
</li>

                    </ul>
                  </div>
                <div style={{backgroundImage:`url(${bgImg})`, paddingBottom:'5vw'}} >
                <div className='drm-heading'>WHY SHOULD YOU OPT FOR IT</div>
                <img className='drm-img-bg' src={bgimgdrm} ></img>
                  <p className='drm-para'>With the help of Part-time employees, businesses can opt for flexible working hours at their convenience.  Part-timers are helpful in keeping your business thriving during the time of peak season. Moreover, these employees enable you to have a larger payroll and thriving diversity. Larger your human resources, more chances to claim opportunities. Thence, ensuring no more  hassle of dealing with employee turnover.




</p>
                </div>
                <div className='fontLink ind-we-cater1'>WHAT'S THE HYPE BEHIND JOB TERRITORY'S PART TIME</div>
              <div className="fontlink container" style={{color:"#535353",marginLeft:'8vw'}}>
  <div className="row align-items-start">
    <div className="col-5" style={{marginRight:'5vw'}}>
      <img className='ind-we-cater-icon' src={img1}></img>
      <h5>Hire as many as you want through monthly </h5>
    </div>
    <div className="col-5" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img2} ></img>
          <h5>Get a privilege to choose the best resources and personnel for your </h5>

    </div>
   
  </div>
  <div className="row align-items-center">
    <div className="col-5" style={{marginRight:'5vw',marginLeft:'vw'}}>
    <img className='ind-we-cater-icon' src={img4} ></img>
          <h5>No more middleman; interact with your dedicated   </h5>

    </div>
    
    <div className="col-5" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img6} ></img>
          <h5>No long term contract</h5>

    </div>
    <div className="col-5">
    <img className='ind-we-cater-icon' src={img3} ></img>
          <h5>HR expertise guidance </h5>

    </div>
  </div>
</div>
                <IndustryWeCater />
                <TestimonialCar/>
              </MobileView>
    </div>
  )
}

export default PartTime