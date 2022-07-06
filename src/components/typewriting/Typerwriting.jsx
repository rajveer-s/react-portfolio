import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const HeaderEffect = () => {

  const {text} = useTypewriter({
    words: ['Web Developer', 'Critical Thinker', 'Creative', 'Team Player' ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 90,
    typeSpeed: 100
  })

  return (
    <div className='loopdiv'>
      <h5>{text} <Cursor /></h5>
    </div>
  )
}

export default HeaderEffect