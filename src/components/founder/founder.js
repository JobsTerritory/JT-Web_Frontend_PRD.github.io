import React from 'react'
import { BrowserView, MobileView, TabletView } from 'react-device-detect';
import { Footer } from '../../footer/footer';
import Navbar from '../../Navbar';
import './founder.css'
const Founder = () => {
return (<div>
<BrowserView>
<Navbar btn_color = "#FFC600"/>

    <section style={{textAlign:'center'}}>
        
<div className="box">
    <div className="bg">
</div>
<div className="conten">
    <p className='head'>
        FOUNDER'S PLEDGE
    </p>
    <p className="text">
        We as the Jobs Territory team, strive to eliminate prejudices and disparities in the employment market. We deliberately plan our activities to promote gender equality and formulate strategies. Along with valuing every job seeker who possesses the necessary skills, we encourage them to pursue their dreams. Moreover, we proudly invest our resources in a variety of community initiatives to advance our recruitment practices. Being a founder of Jobs Territory, I pledge to make this world a better place by expanding and prospering our business together.
    </p>
</div>
<div className="bg-2"></div>
</div>
<img src="images-2/founder.png" alt="founder"  className='fndr'/>
    </section>
</BrowserView>
<MobileView>
    <Navbar btn_color = "#FFC600" style = {{backgroundColor:'#060b26'}}/>

<div className="box">
<img src="images/founder.jpeg" alt="founder"  className='fndr'/>
</div>
<div className="conten">
    <p className='head'>
        FOUNDER'S PLEDGE
    </p>
    <p className="text">
        We as the Jobs Territory team, strive to eliminate prejudices and disparities in the employment market. We deliberately plan our activities to promote gender equality and formulate strategies. Along with valuing every job seeker who possesses the necessary skills, we encourage them to pursue their dreams. Moreover, we proudly invest our resources in a variety of community initiatives to advance our recruitment practices. Being a founder of Jobs Territory, I pledge to make this world a better place by expanding and prospering our business together.
    </p>
</div>
</MobileView>

    {/* <div className="crds">
    <div className="crd1">
         <p>Job Seeker</p>
         <p>Looking for a job ?</p>
         <a href="">Apply Now</a>
    </div>
    <div className="crd2">
<p>Recruiter</p>
         <p>Are U Recruiting ?</p>
         <a href="">Post a job</a>
    </div>
</div> */}
</div>
)
}

export default Founder;