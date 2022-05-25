import React, { useState } from 'react'
import { questions } from './questions';
import './quiz.css'
import axios from 'axios';


const Quiz = (props) => {
    const [start,setstart]= useState(true);
    const [count,setCount] = useState(0);
    const[end,setEnd] = useState(false);
const Qd = props.data;
const setQd = props.setdata ;

const handleAnswerOptionClick = (answer,count) =>
{
const newQd =  
{
  ...Qd,
  [`question${count + 1}`]: answer ,
}
setQd(newQd);
        const flag = count + 1;

        if(flag < questions.length)
        {

            setCount(flag);
        }
        else
        {
// console.log(Qd);
axios.post("https://jobsterritorybackend.herokuapp.com/contactUs",Qd)
setEnd(true);
        }
}
const handlestart = () =>
{
  setstart(false);
}
if(start)
{
  return(
    <>
  <div className='start'>
    <img src="images/Quesstionare.png" alt="" />
    <p className='st'>Take this questionnaire for better assesement of your profile.</p>
<button  className="start-btn"onClick={handlestart}>Start</button> 
</div>
        
 </> 
  )
}
else
{
if(!end){
  return(
        <div className='quiz'>
            <p className="question" style={{paddingBottom:'1vw'}}>{questions[count].questionText}</p>
                {questions[count].answerOptions.map((answerOption) =>(
							<button  className = 'options' onClick={() =>handleAnswerOptionClick(answerOption.answerText,count)} >{answerOption.answerText}</button>
						))}

        </div>
    ) }
    else{
      return(
        <>
        <div className='end'>
<p className="etxt">Your questionnaire is submitted !!!</p>
                  <p className="etxt2">We will contact you soon .</p>
                  <a href="#main"><button className='done'>Done</button></a>
        </div>
      </>
      )
    } 
  }
}

export default Quiz;