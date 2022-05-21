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
              <HypeDRM/>
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
                <HypeDRM/>
                <IndustryWeCater />
                <TestimonialCar/>
              </MobileView>
    </div>
  )
}

export default PartTime