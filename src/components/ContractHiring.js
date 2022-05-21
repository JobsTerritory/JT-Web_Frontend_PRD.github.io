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
const ContractHiring = () => {
  return (
    <div>
      <Navbar btn_color='#FFC600' />
      <BrowserView>
              <div className='row'>
                <div className='col md-1 DRMcol1' >
                                   <img src="images/Flexible Hiring.png" style={{marginLeft:'50px',width:'50vw',height:'476px'}} />

                  <div className='fontLink DRMtitle'>GIG/FLEXIBLE HIRING
</div>
                  <div className='fontLink DRMdesc'>
                  Since 2020, 76 per cent of leaders incorporates flexible hiring a.k.a Gig Hiring model to set up resilient human resources. The perfect fusion of permanent and flexible hiring authenticates to be the best staffing strategy by benefiting both businesses and staffing agencies. It does not matter if you have a small start-up or a big well-established business! With JT’s Gig/Flexible hiring, sign up new personnel according to your budget and other requirements. 







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
                  <p className='drm-para'>Gig/Flexible Hiring is known to tackle immediate business requirements or create stand-by during emergencies. The firm can hire professionals with fine expertise and experience without any long term hassle. Tapping down the costs of hiring and coaching new personnel. Thence, keeping overall cost of the project at check.





</p>
                </div>
                <img className='drm-img-bg' src={bgimgdrm} ></img>
              </div>
              <HypeDRM/>
              <IndustryWeCater/>
              <TestimonialCar />
              
              </BrowserView>
              <MobileView>
              <div className='fontLink DRMtitle'>GIG/FLEXIBLE HIRING
 </div>
              
              <div className='fontLink DRMdesc'>
              Since 2020, 76 per cent of leaders incorporates flexible hiring a.k.a Gig Hiring model to set up resilient human resources. The perfect fusion of permanent and flexible hiring authenticates to be the best staffing strategy by benefiting both businesses and staffing agencies. It does not matter if you have a small start-up or a big well-established business! With JT’s Gig/Flexible hiring, sign up new personnel according to your budget and other requirements. 



 


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
                  <p className='drm-para'>Gig/Flexible Hiring is known to tackle immediate business requirements or create stand-by during emergencies. The firm can hire professionals with fine expertise and experience without any long term hassle. Tapping down the costs of hiring and coaching new personnel. Thence, keeping overall cost of the project at check.






</p>
                </div>
                <HypeDRM/>
                <IndustryWeCater />
                <TestimonialCar/>
              </MobileView>
    </div>
  )
}

export default ContractHiring