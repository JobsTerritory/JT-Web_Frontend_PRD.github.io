import React, { useState } from 'react'
import './Contact.css'
import Quiz from '../quiz/Quiz'

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
setvisibility(false)
e.preventDefault();
console.log(data);
}
if(visibilty)
{
return (
    <main className="form-signin">
        <p className='h'>Contact us</p>
        <div className="card"  style={{backgroundColor:'#FFE6F4'}}>
            {/* <div className="card-body"> */}
                <form method='post' autoComplete='off'>
                    <div className="mb-4">
                        <input type="text" name = "name"className="inputs " placeholder="Your name" onChange={handlechange} required />
                    </div>
                    <div className="mb-4">
                        <input type="email" name = "email" className="inputs " placeholder="Your email" onChange={handlechange}  required/>
                    </div>
                <div className="mb-4">
                        <input type="text" name = "phone number"className="inputs " placeholder="Your phone number" onChange= {handlechange} />
                    </div>
                    <div className="form-floating mb-4">
                        <textarea cols="20" rows="5"  name = "message" className="inputs" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handlechange}></textarea>
                        {/* <label htmlFor="floatingTaxtarea2">Message</label> */}
                        </div>
                    <button className="btn-color" type="submit" onClick={handleclick}>Submit</button>
                </form>
            </div>
        {/* </div> */}
    </main>

) 
}
else 
{
    return(
    <Quiz/> )
}
}

export default Contact