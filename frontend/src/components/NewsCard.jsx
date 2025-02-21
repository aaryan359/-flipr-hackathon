import React from 'react'

import img1 from '/img1.png';
import img2 from '/img2.png';
function NewsCard() {
  return (
   
     
     
     <div>
         <div className="news-card">
           <img src={img1} alt="News Card 1" />
           <h3>Title 1</h3>
           <p>Description 1</p>
         </div>
         <div className="news-card">
           <img src={img2} alt="News Card 2" />
           <h3>Title 2</h3>
           <p>Description 2</p>
         </div>
         <div className="news-card">
           <img src={img1} alt="News Card 3" />
           <h3>Title 3</h3>
           <p>Description 3</p>
         </div>

     

     </div>


  )
}

export default NewsCard