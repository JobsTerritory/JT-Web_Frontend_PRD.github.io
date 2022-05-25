import React, { useState ,useEffect} from 'react';
// import '../App.css'
import './Carousel.css'
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { BrowserView,MobileView } from 'react-device-detect';

const TestCarousel = () => {
const [data,setdata] = useState([]);
const testData = async() =>     
{
const getdata = await axios.get("https://jobsterritorybackend.herokuapp.com/teamTestimonials");
setdata(getdata.data);
}
useEffect(() => {
  testData();
  console.log(data)
},[])
  return (
     <div>
  <p className='thd'>Team Testimonials</p>
  <BrowserView>
  <Carousel style = {{textAlign:'center',backgroundColor:'#F86FA3',left:'25%',width:'50%',borderRadius: '0px 232px 0px 194px',padding:'5vw'}}>
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
      <p style={{fontSize:'1.5vw',color:'white',fontWeight:'600'}}>{item.review}</p>
      <h3 style={{fontWeight:'600', textAlign:'right'}}>{item.name}</h3>
      <h3  style={{fontWeight:'600', textAlign:'right'}}>{item.designation}</h3>
  </Carousel.Item>
  )
  })}
  </Carousel>
  </BrowserView>
  <MobileView>
    <Carousel style = {{textAlign:'center',backgroundColor:'#F86FA3',width:'100%',padding:'5vw'}}>
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
      <h3 >{item.name}</h3>
      <h3>{item.designation}</h3>
      <p style={{fontSize:'1.5em'}}>{item.review}</p>
  </Carousel.Item>
  )
  })}
  </Carousel>
  </MobileView>
  
  </div>
  )
}

export default TestCarousel ;

