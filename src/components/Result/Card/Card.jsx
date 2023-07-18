import React from 'react'
// import logo from '../../../assets/images/fire.png';
import './Card.scss'



export default function Card({ imageAvatar }) {
   return (
      <div><div className='card'>
         <img src={imageAvatar} alt="" />
         <h2 className='title'>freeCodeCamp</h2>
         <p className='subtitle'>freeCodeCamp</p>
         <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto maiores maxime nam tempora nulla reiciendis molestiae!
         </p>
      </div></div>
   )
}
