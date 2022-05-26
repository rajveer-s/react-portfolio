import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const HeaderEffect = () => {

  return (
    <div className='loopdiv'>
      <h5>{text} <Cursor /></h5>
    </div>
  )
}

export default HeaderEffect