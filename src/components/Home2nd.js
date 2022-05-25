import React from 'react'
import img1 from '../images/Group163.png'
import img2 from '../images/Group227.png'
import img3 from '../images/Group421.png'

const Home2nd = () => {
  return (
    <div className='fontLink home2nd  ' >
              <div className='home2ndHeading' >Make the right hires, faster with the
 world's leading recruiting software</div>

    <div className='fontLink' >
      <div className='row '>
        <div className='Home2ndCol'>
          <div className='Home-2-img-bg'>
          <img className='Home2ndimg' src={img1} />
          </div>
          <div className='fontLink Home2ndtitle' style={{marginLeft:'3.2vw'}}>MACHINE LEARNING (AI)</div>
          <div style={{maxWidth:'373px', }}>
          <div className='fontLink Home2nddesc' >Find and attract candidates</div>
          <p className='Home2ndSumm'  >At the time of job listing, our AI-powered sourcing generates the list of the best prospective candidates as per the skill requirement.
</p>
          </div>
        </div>
        <div className='Home2ndCol'>
        <div className='Home-2-img-bg'>
        <img className='Home2ndimg' src={img2}/>
        </div>
        <div className='fontLink Home2ndtitle'>MOTIVATE & ANALYSE
</div>
          <div style={{maxWidth:'373px', }}>
          <div className='fontLink Home2nddesc'>Putting the potential personnel forward
</div>
          <p className='Home2ndSumm' >From collaborating with hiring teams to evaluate applicants to collecting feedback and deciding who is best. It is an all in one recruiting system.
</p>
          </div>
        </div>
        <div className='Home2ndCol'>
        <div className='Home-2-img-bg'>
        <img className='Home2ndimg' src={img3} />
        </div>
        <div className='fontLink Home2ndtitle'>RECRUIT & OPTIMISE</div>
          <div style={{maxWidth:'373px',}}>
          <div className='fontLink Home2nddesc' >Effective Hiring decision in half the time</div>
          <p className='Home2ndSumm' >Work efficiently with a well-guided recruiting platform. It simplifies the process and manual tasks such as scheduling, interviews and approval. 

</p>
          </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Home2nd