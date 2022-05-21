import React from 'react'

const BlogSub = () => {
  return (
    <div className='fontLink' style={{backgroundColor:'#FFF4CC', maxWidth:'1648px', marginLeft:'100px'}}>
              <div style={{textAlign:'center', fontSize:'40px'}}>Subscribe to our blogs and get notified everytime a new blog is added</div>
              <div>
              <form class="row g-3">
 
  <div class="col-auto">
    <label for="email" class="visually-hidden">E-mail</label>
    <input type="email" class="form-control" id="inputPassword2" placeholder="E-mail" style={{ width:'65vw' ,marginLeft:'120px'}}/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn mb-3" style={{backgroundColor:'#FFD33D', color:'white',borderRadius:'10px'}}>Subscribe</button>
  </div>
</form>
              </div>
    </div>
  )
}

export default BlogSub