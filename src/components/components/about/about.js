import React from 'react'
import Navbar from '../../../Navbar';
import { deviceDetect, BrowserView, MobileView } from 'react-device-detect';
import './about.css'
import { Button } from 'react-bootstrap';

const About = () => {
  return (
      <>
      <Navbar btn_color = "#ffc600" />
      <BrowserView>
    <section>
    <div className="abt">
        <div className="bg-3">
</div>
<img src="images-2/about.png" alt="" className='img-abt' />
<div className="ext">
       <p className='hd'>WHO WE ARE</p>
        <p className='abtxt'>
            <span style={{fontWeight:'600'}}>
"Jobs Territory"</span> collaborates with the right workforce and offers an effective platform for efficient Management and Talent Acquisition.
</p>
<p className='abtxt'>
    At the end of the day, all that matters is if we can keep clients, candidates and employees happy and satisfied.
    <p style={{paddingTop:'1vw'}}> Are you a goal-oriented, ambitious and searching for ways to obtain a competitive advantage?</p> Congratulations! Your search has come to an end. We cordially invite us along on our roller coaster ride, where the journey is challenging, however, thrill is remarkable.
</p>
</div>
 

    </div>
    
    </section>
    <section className='se'>
        <p className='set'>What Sets us Apart</p>
                 <div className='bg-color'>
</div>
        <div className='con'>
    
            <div className='img-con'>
                <div className="t">
                 <div className='pic'>
                    <img src="images-2/img-1.png" alt="" />
                </div>
<p className='set-1'>Massive Database</p>
                </div>
             <div className="t">
<div className='pic'>
                    <img src="images-2/img-2.png" alt="" />

                </div>
            <p className='set-1'>Customised Report</p>

             </div>
                <div className="t">
<div className='pic'>
                    <img src="images-2/img-3.png" alt="" />

                </div>
                <p className='set-1'>Gender Neutrality</p>
                </div>
                
            </div>
           
        </div>
                <p className='set'>Meet Our Leaders</p>
        <div className="lead">
            <div className="inf">
                            <img src="images-2/ramesh.png" alt="" />

                <p className="name">
Ramesh Jayaraman {'(RJ)'}
                </p>
                <p className="pos">
Founder
                </p>
                <p className="det">
                    Ramesh has over 13 years of experience in the recruitment industry and has led various recruitment teams across multiple verticals and geographies. Through his innovative sourcing methods, he has worked with top executives on talent acquisition. 
                </p>
            </div>
        </div>
        <div className="lead-0">
            <div className="inf-0">
                            <img src="images-2/hr.png" alt="" />

                <p className="name">
Banty Bansal
                </p>
                <p className="pos">
Head Operations
                </p>
                <p className="det">
With a BBM in HR Management and 8+ years of experience in education, sales and recruitment, she envisions herself as Jobs Territory's 'Preferred Vendor Partner of Choice' for clients, with a passion for continuous learning and highly driven motivation.


                </p>

            </div>
        </div>
        <div className="lead">
            <div className="inf">
            <img src="images-2/sarun.png" alt="" />

                <p className="name">
Sarun Satheesh
                </p>
                <p className="pos">
Head Backend
                </p>
                <p className="det">
        Sarun has done B.Tech. in Computer Science and has 10+ years of experience in Administration and IT Infrastructure. Since the inception of Jobs Territory, he has always been a pivotal member in growing JT's strength and offering continuous support.

                </p>
            </div>
        </div>
    </section>
    </BrowserView>
    <MobileView>
        <div style={{padding:'3vw'}}>
        <div className='hd'>
            WHO ARE WE
        </div>
        <img src="images-2/about.png" alt="" className='img-abt' />
        </div>
        <p className='abtxt'>
"Jobs Territory" collaborates with the right workforce and offers an effective platform for efficient management and talent acquisition.

    At the end of the day, all that matters is if we can keep clients, candidates and employees happy and satisfied. Are you are goal-oriented, ambitious and searching for ways to obtain a advantage? Congratulations! Your search has come to an end. We cordially invite us along on our roller coaster ride, where the journey is challenging but the thrill is remarkable. We as JT is known to build careers and organisation. 
</p>
<Button className='btn-getintouch'>GET IN TOUCH</Button>
<div>
    <div className='set'> What Sets Us Apart</div>
</div>

<div style={{backgroundColor:'#ffc600'}}>
<div className='img-con'>
                <div className="t">
                 <div className='pic'>
                    <img src="images-2/img-1.png" alt="" />
                    </div>
                    </ div>
                    
</div>
</div>
<p className='set-1'>Massive Database</p>
<div style={{backgroundColor:'#ffc600'}}>
<div className='img-con'>
                <div className="t">
                 <div className='pic'>
                    <img src="images-2/img-2.png" alt="" />
                    </div>
                    </ div>
                    
</div>
</div>
<p className='set-1'>Customised Report</p>
<div style={{backgroundColor:'#ffc600'}}>
<div className='img-con'>
                <div className="t">
                 <div className='pic'>
                    <img src="images-2/img-3.png" alt="" />
                    </div>
                    </ div>
                    
</div>
</div>
<p className='set-1'>Gender Neutrality </p>
<div className='set'>OUR LEADERS</div>
<div className='leaderbg1'>
    <div className='nameleader'>Ramesh Jayaraman Alias</div>
    <img className='img-leader' src="images-2/ramesh.png" />
    <p className="pos">
Founder</p>
    <p className="det fontLink">
                    Ramesh has over 13 years of experience in the recruitment industry and has led various recruitment teams across multiple verticals and geographies. Through his innovative sourcing methods, he has worked with top executives on talent acquisition. 
                </p>
</div>
<div className='leaderbg2'>
    <div className='nameleader' style={{color:'white'}}>Banty Bansal</div>
    <img className='img-leader' src="images-2/hr.png" />
    <p className="pos" style={{color:'white'}}>
    Head Operations</p>
    <p className="det fontLink" style={{color:'white'}}>
    With a BBM in HR Management and 8+ years of experience in education, sales and recruitment, she envisions herself as Jobs Territory's 'Preferred Vendor Partner of Choice' for clients, with a passion for continuous learning and highly driven motivation.
                </p>
</div>
<div className='leaderbg1'>
    <div className='nameleader'>Sarun Satheesh</div>
    <img className='img-leader' src="images-2/sarun.png" />
    <p className="pos">
Head Backend</p>
    <p className="det fontLink">
    Sarun has done B.Tech. in Computer Science and has 10+ years of experience in "Administration IT Infrastructure". Since the inception of Jobs Territory, he has always been a pivotal member in growing JT's strength and offering continuous support. 
                </p>
</div>
    </MobileView>
    </>
)
}

export default About;