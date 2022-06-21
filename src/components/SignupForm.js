import React from 'react'

const SignupForm = () => {
  return (
    <div className='signupform ' style={{maxWidth:'506px',maxHeight:'458px', padding:'55px',backgroundColor:'#FFCF2B', borderRadius:'10px', marginTop:'180px', marginRight:'200px'}}>
              <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember Password?</label>
  </div>
  <button type="submit" className="btn btn-light" style={{color:'#FFCF2B', fontSize:'20px', paddingLeft:'20px',paddingRight:'20px', marginLeft:'120px'}}>Submit</button>
</form>
    </div>
  )
}

export default SignupForm