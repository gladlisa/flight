import React, {useEffect} from 'react'

// imported destination images
import paris from '../../assets/paris.jpg'
import dubai from '../../assets/dubai.jpg'
import newyork from '../../assets/newyork.jpg'
import stockholm from '../../assets/stockholm.jpg'

// imported traveler images
import traveler1 from '../../assets/user (1).png'
import traveler2 from '../../assets/user (2).png'
import traveler3 from '../../assets/user (3).png'
import traveler4 from '../../assets/user (4).png'

// import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

// map to display all the data
const travelers = [
  {
    id: 1,
    destinationImage: paris, 
    travelerImage: traveler1,
    travelerName: 'Lisa',
    socialLink: '@gladlisa',
    travelerDistance: '4500km',
  },
  {
    id: 2,
    destinationImage: dubai, 
    travelerImage: traveler2,
    travelerName: 'Johny',
    socialLink: '@futurist',
    travelerDistance: '5500km'
  },
  {
    id: 3,
    destinationImage: newyork, 
    travelerImage: traveler3,
    travelerName: 'Riley',
    socialLink: '@welcometonewyork',
    travelerDistance: '6500km'
  },
  {
    id: 4,
    destinationImage: stockholm, 
    travelerImage: traveler4,
    travelerName: 'Axel',
    socialLink: '@hallahej',
    travelerDistance: '7500km'
  },
]

const Travelers = () => {
// use effect to set animation duration
useEffect(()=>{
  Aos.init({duration: 2000})
}, [])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down'data-aos-duration='2500'>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
  
         {
          travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink, travelerDistance})=>{
            return(
              // {/* Single passanger card */}
              <div data-aos='fade-up'data-aos-duration='2500' key={id} className="singleTraveler">
                  <div className="travelerDistance">
                    {/* Display travelerDistance here */}
                    <span>{travelerDistance}</span>
                  </div>
              <img src={destinationImage} className='destinationImage' />
  
              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img src={travelerImage} className='travelerImage' />
                </div>
                
                <div className="travelerName">
                  <span>{travelerName}</span>
                  <p>{socialLink}</p>
                </div>
              </div>
            </div>
            )
          })
         }




        </div>
      </div>
    </div>
  )
}

export default Travelers