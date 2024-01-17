import React from 'react'
import  './maillist.css'
const MailList = () => {
  return (
    <div  className='mail'>
    <h1 className="mailTitle">Save Time And Save Money</h1>
    <span className="mailDescription">Sigup and we will sent you  the best details </span>
<div className="mailInputContainer">
<input type="text" placeholder='Your  Email' />
<button>subscribe</button>
    </div>
    </div>
  )
}

export default MailList