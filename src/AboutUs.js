import React from 'react'
import com from './images/com.jpg'
import com1 from './images/com1.jpg'
import com2 from './images/com2.jpg'
import com3 from './images/com3.jpg'
import com4 from './images/com4.jpg'




function AboutUs() {
  return (
    <div className="">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={com} className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={com1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={com2} class="d-block w-100" alt="..." />
          </div>


          <div class="carousel-item">
            <img src={com3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={com4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={com2} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
