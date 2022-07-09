import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../utils/routes'

const About = () => {
  return (
    <div>
      <p>About page</p>
      <Link className='text-sky-400' to={ROUTES.HOME}>goto Home page</Link>
    </div>
  )
}

export default About