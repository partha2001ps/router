import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function Fsd() {
  return (
   
          <div className='card-group'>
      <div className='card d-inline-block m-4' style={{width: "18rem"}}>
      <Link to='/fsd/card1'>
             <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp" className='card-img-top' alt="" />
             <div className='card-body'>
                 <h5 className='card-title '>7 Best Full-Stack Development Online Courses [2023]</h5>
                 <p className='card-text '>Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand</p>
             </div></Link>
              </div>
              
         <div className='card d-inline-block  m-4' style={{width: "18rem"}}>
         <Link to='/fsd/card2'>
             <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png" className='card-img-top' alt="" />
             <div className='card-body'>
                 <h5 className='card-title'>The Ultimate Guide to Real-World Full-Stack Development Applications</h5>
                 <p className='card-text'>Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can</p>
             </div></Link>
                  </div>
                    
          <div className='card d-inline-block  m-4' style={{ width: "18rem" }}>
          <Link to='/fsd/card3'> 
             <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png" className='card-img-top' alt="" />
             <div className='card-body'>
                 <h5 className='card-title'>The Top 10 Tools Every Full-Stack Developer Should Master in 2023</h5>
                 <p className='card-text'>‍As a full-stack developer, having the right set of tools is crucial for your success.</p>
                  </div>
                  </Link>
                  </div>
                 
      </div>

  )
}
