import React from 'react'
import Contact from '../contact/Contact';
import './WTpage.css'
import Navbar from '../../../Navbar';
import { Footer } from '../../../footer/footer';
import TestCarousel from '../carousel/TestCarousel';
import { BrowserView, MobileView } from 'react-device-detect';
const WTpage = () => {
  return (
    <>
  
    <div className='main-page'>


      <section className='sec-1' id='main'>
        {/* image and get started button section */}

        <img src="images/bg-image.png" alt='img' className='bg-image'/>
        <div className="layer">

        </div>
        <div className="layer-2">
          <p className='des'>A Woman Should be Two Things!</p>
          <p className='des'>Who and What she wants!</p>
          <a href="#Contactus"><button  className='bttn'  >Get Started</button></a>
        </div>
        
        
        </section>
        <section className="sec-2">
          <p className='heading'>WHO WE ARE</p>
          <p className='intro'>
            With the motto of<span style={{fontWeight:600}}>"Empowered Women,Empowers Women"</span>, Jobs Territory is a recruiter company that not only unravels the pool of talented applicants but also enables women to<span style={{fontWeight:'600'}}>kickstart/reignite</span> their careers by offering remote recruiting job oppurtunities. We're on a mission to help as many<span style={{fontWeight:600}}>"Super Women"</span> as possible .
          </p>
          <div className="vision">
            <div className="content">
Our vision is to become the employers' preferres Recruitment Agency to unshackle Women-'The Silent Warriors of our Society' and connect businesses to the right workforce. From a fresher to a woman ending her sabbatical,our experts will coach you to embellish your best-recruiting skills. We try to assist women all over India in resuming or expanding their careers by hiring them as Remote Recruiters.Further, our team helps businesses to succeed so that communities can thrive.</div>
          </div>
          <img className="image" src="images/Women working with an Infant.png" alt="" />
</section>
<section className='sec-3'>

  <p className='details'>WHOM DO WE CATER TO</p>
  <div className="contain">
    <div className="ro">
      <div className="co">
        <img src="images/img-1.png" className='log'  alt='img-1'/>
        <p className='txt'>Aspiring employed women who dream to accomplish more in life.</p>

      </div>
      <div className="co">
        <img src="images/img-2.png"  className='log' alt='img-2'/>
        <p className='txt'>Young females who completed their academics and looking for an internship or fresher jobs.</p>

      </div>
      </div>
    <div className="ro">
      <div className="co">
      <img src="images/img-3.png" className='log' alt='img-3'/>
      <p className='txt'>Women trying to restart their careers after going on a sabbatical.</p>

      </div>
        <div className="co">

          <img src="images/img-4.png"  className='log' alt='img-4' />
          <p className='txt'>Potential applicants casting around remote jobs both in full-time or part-time.</p>

        </div>
    </div>
    </div>

</section>
<section className = "sec-4">
  <TestCarousel />
</section>
<section className='sec-5' id='Contactus' style={{backgroundImage:`url("images/bg-img-21.png")` }} >
    <Contact  />
</section>
      <Footer/>
    </div>
  <MobileView>
  <div style={{position : 'absolute',
  left: '0%',top : '0%'}}>
      <Navbar btn_color='#e9158e' nav_txt_col='white'/>
    </div>
  </MobileView>
  <BrowserView>
<div style={{position : 'absolute',
  right: '0%',top : '0%'}}>
      <Navbar btn_color='#e9158e' nav_txt_col='white'/>
    </div>
  </BrowserView>
  
    </>
  )
}

export default WTpage;