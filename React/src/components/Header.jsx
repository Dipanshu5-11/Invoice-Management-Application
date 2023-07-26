import React from 'react'
import hrc from "../images/hrclogo.svg"
import abc from "../images/abclogo.svg"
const Header = () => {
  return (
    <div>
    <div className='headerbody'>
       <div className='abc'>
       <img src={abc} alt="My Image"  />
       </div>
       <div className='hrc'>
       <img src={hrc} alt="My Image" />
       </div>
       </div>
       <div className='invoiceList'>Invoice List</div>
    </div>
  )
}

export default Header
