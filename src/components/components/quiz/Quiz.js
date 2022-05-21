import React, { useState } from 'react'
import { questions } from './questions';
import './quiz.css'


const Quiz = () => {
    const [start,setstart]= useState(true);
    const [count,setCount] = useState(0);
    const[Qd,setQd] = useState([]);
    const[end,setEnd] = useState(false)

    const handleAnswerOptionClick = (answer,count) => 
{
const newQd =  
[
  ...Qd,
  {
    [questions[count].questionText] : answer}
]
setQd(newQd);
        const flag = count + 1;

        if(flag < questions.length)
        {

            setCount(flag);
        }
        else
        {
console.log(Qd);
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
    <p className='st'>Take This questionnaire for better assesement of your profile.</p>
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
            <p className="question">{questions[count].questionText}</p>
                {questions[count].answerOptions.map((answerOption) => (
							<button  className = 'options' onClick={() => handleAnswerOptionClick(answerOption.answerText,count)} >{answerOption.answerText}</button>
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
    } }
}

export default Quiz;