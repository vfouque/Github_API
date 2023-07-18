import React from 'react'
import './Searchbar.scss'


export default function({onChange, onKeyDown, repoName}) {

  return (
    <div className="searchbar">
      <i className="fa-solid fa-magnifying-glass mr-15"></i>
      <input
       onChange={onChange}
       onKeyDown={onKeyDown}
       type="text|number"
       className="input"
       placeholder='react'
       value={repoName} />
    </div>
  )
}
