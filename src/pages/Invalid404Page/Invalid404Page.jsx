import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Invalid404Page = () => {
  return (
    <div>
      {/* re-create the 404 page  */}
      <h3 style={{paddingTop: "20px"}}>This page doesn't exist</h3>
      <a style={{fontSize: "2rem", textDecoration:"none"}} href="/"><AiOutlineArrowLeft />About Me</a>
    </div>
  )
}

export default Invalid404Page