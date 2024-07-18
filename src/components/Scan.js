import React from 'react'
import "../css/Scan.css"

export default function Scan() {
  return (
    <div className='scan-body'>
        <button className='browsebox'>
            <input type="file" id="browse"/>
        </button>

    </div>
  )
}
