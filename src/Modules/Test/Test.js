import React from 'react'
import "./Test.css"
const Test = () => {
  return (
    <div>
      <div>
        <label className='tst_label'>FirstName</label>
        <input  className='tst_input'/>
      </div>
      <div>
        <label className='tst_label'>LastName</label>
        <input  className='tst_input'/>
      </div>
      <button className='tst_btn'>Submit</button>
    </div>
  )
}

export default Test
