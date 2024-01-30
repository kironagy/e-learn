import React from 'react';
import  per_img from '../assets/images/avatar.jpg';
const Announcements = () => {
  return ( 
    <div className='content-side'>
      <div className="container">
        <div className="boxes">
          <div className="box">
            <div className="right">
              <img style={{ width:"100px", height:"100px" }} src={per_img} alt="person_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcements;