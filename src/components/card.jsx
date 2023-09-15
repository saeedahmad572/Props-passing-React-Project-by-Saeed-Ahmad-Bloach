import React from 'react'

export default function Card({imageSrc,Title,Discription,link}) {

  return (
    <div>
        <div className="card">
            <img src= {imageSrc} className="cardimage"/>
            <h3>{Title}</h3>
            <p>
                {Discription}
            </p>
           <a href={link}><button className="btn">Visit</button></a> 
        </div>
      
    </div>
  )
}
