import React from 'react'
import './Result.scss'
import Card from './Card/Card'


export default function Result({data}) {
  
 
  return (

    <div className='result'>
      {/* {console.log({data})} */}
      {/* {console.log(data[0])} */}
      {/* {console.log(data[0].owner.avatr_url)} */}
      {data.map((r, index) => (
        <Card key={index} imageAvatar={`${r.owner.avatar_url}`}/>        
      ))} 
    </div>
  )
}
// .filter((r) => r.title.toLowerCase().startsWith(filter))
