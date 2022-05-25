import React, { useState } from 'react'
import './Contact.css'
import Quiz from '../quiz/Quiz'
import axios from 'axios'
const Contact = () => {
    const [visibilty,setvisibility] = useState(true)
    const [data,setdata] = useState({})
    

    const handlechange = (e) => {
        const {name,value} = e.target;

        const newdata = {
            ...data,
            [name] : value,
        }
        setdata(newdata);

    }

const handleclick = (e) => 
{
// setdata(newdata);
// setvisibility(false)
// console.log(data);
}

if(visibilty)
{
return (
    <main className="form-signin">
        <p className='h'>Let's Connect</p>
        <div className="card"  style={{backgroundColor:'#FFE6F4'}}>
            {/* <div className="card-body"> */}
                <form autoComplete='off' onSubmit={()=>{ 
               setvisibility(false)}} >
                    <div className="mb-4">
                        <input type="text" name = "name"className="inputs " placeholder="Your name" onChange={handlechange} required />
                    </div>
                    <div className="mb-4">
                        <input type="email" name = "email" className="inputs " placeholder="Your email"  onChange={handlechange} required/>
                    </div>
                <div className="mb-4">
                        <input type="number" name = "phoneNumber" className="inputs " placeholder="Your phone number" onChange={handlechange} required/>
                    </div>
                    <div className="form-floating mb-4">
                        <textarea cols="20" rows="5"  name = "message" className="inputs" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handlechange} required></textarea>
                        {/* <label htmlFor="floatingTaxtarea2">Message</label> */}
                        </div>
                    <button className="btn-color" type="submit">Submit</button>
                </form>
            </div>
        {/* </div> */}
    </main>

) 
}
else 
{
    return(
    <Quiz data = {data} setdata = {setdata}/> )
}
}

export default Contact