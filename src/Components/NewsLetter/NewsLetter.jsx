import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>Get Exclusive Offers On Your email</h1>
     <p>Subscribe to our newsletter</p>

     <div>
        <input type="email" placeholder='your email id' />
        <button>subscribe</button>
     </div>
    </div>
  )
}

export default NewsLetter