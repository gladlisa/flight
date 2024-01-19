import React, {useEffect} from 'react'

// import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {
// use effect to set animation duration
useEffect(()=>{
  Aos.init({duration: 2000})
}, [])

  return (
    <div className='subscribe section'>
      <div data-aos='fade-up'data-aos-duration='2500' className="sectionContainer container">
        <h2>Don't want to miss anything?</h2>
        <p>Subscribe to our newsletter and receive our latest updates!</p>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your email address'/>
          <button className='btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe