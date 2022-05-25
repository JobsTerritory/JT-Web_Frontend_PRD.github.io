import React, { useEffect,useState  } from 'react';
import '../App.css'
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { BrowserView, MobileView } from 'react-device-detect';
const TestimonialCar = () => {
const [data,setdata] = useState([]);
const testData = async() =>     
{
const getdata = await axios.get("https://jobsterritorybackend.herokuapp.com/clientTestimonials");
setdata(getdata.data);
}
useEffect(() => {
  testData();
},[])

return (
  <div style={{marginTop:'2vw',marginBottom:'2vw',textAlign:'center'}}>
    <h1 className='fontlink' style={{textAlign:'center',fontWeight:'bold'}}>Client Testimonials</h1>
    <BrowserView>
    <Carousel  style={{backgroundColor:'#FFD600',left:'25%',width:'50%',borderRadius: '0px 232px 0px 194px',padding:'5vw'}}>
  {data.map((item) => {
    return(
<Carousel.Item >
    <img
      src={item.imageUrl}
      alt="First slide"
      width='150vw'
      height='150vw'
      style={{borderRadius:'50%'}}
      />
      <h4>{item.company}</h4>
            
      <p style={{fontSize:'1.5em'}}>"{item.review}"</p>
      <h3  style={{textAlign:'right'}}>{item.name}</h3>
            <h3 style={{textAlign:'right'}}>{item.designation}</h3>
  </Carousel.Item>
  )
  })}
  </Carousel>
    </BrowserView>

<MobileView>
  <Carousel  style={{backgroundColor:'#FFD600',width:'100%',padding:'5vw'}}>
  {data.map((item) => {
    return(
<Carousel.Item >
    <img
      src={item.imageUrl}
      alt="First slide"
      width='150vw'
      height='150vw'
      style={{borderRadius:'50%'}}
      />
      <h4>{item.company}</h4>
      <h3 className='fontlink'>{item.name}</h3>
      <h4>{item.designation}</h4>
      <p style={{fontSize:'1.5em'}}>{item.review}</p>
  </Carousel.Item>
  )
  })}
  </Carousel>
</MobileView>
  </div>
  )
}

export default TestimonialCar ;

