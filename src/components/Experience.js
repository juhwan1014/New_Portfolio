import React, { Component } from 'react';
import pixels from '../images/pixels.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class Experience extends Component {
  
    render() { 
        const data = [
            {
                id: 1,
                title: "Social Media App",
                img:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
              },
              {
                id: 2,
                title: "Rampa UI Design",
                img:
                  "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
              },
              {
                id: 3,
                title: "E-commerce Web Design",
                img:
                  "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
              },
              {
                id: 4,
                title: "Relax Mobile App",
                img:
                  "https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900",
              },
              {
                id: 5,
                title: "Hero Web Design",
                img:
                  "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900",
              },
              {
                id: 6,
                title: "Banking App",
                img:
                  "https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900",
              },
        ]
        return (<div className='experience'>
            <h2 className="title">Projects</h2>
        <div className="project">
         <div className="slider">
         
            { data.map(d=>(

            <div className="container">
                 <div className="item">
                     <div className="left">
                         <div className="leftContainer">
                          <div className="imgContainer">
                       <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        {/* <h2>Title</h2> */}
                        <h2>{d.title}</h2>
                        <p>asdasdasdasda</p>
                        <span>Projects</span>
                        </div>
                     </div>
                     <div className="right">
                     {/* <img src={pixels} alt={"pixels"}></img> */}
                     <img src={d.img} alt={""}></img>
                     </div>
                 </div>
             </div>
               ))
    }
             <FontAwesomeIcon icon={faChevronLeft} className="arrow_left"/>
         <FontAwesomeIcon icon={faChevronRight} className="arrow_right" />
         </div>
         </div>
        </div>  );
    }
}
 
export default Experience;