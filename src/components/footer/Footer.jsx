import React from 'react'

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='absolute-center'> Copyright &copy; {year} Zomato | All Rights Reserved | Terms And Conditions Applied </div>
  )
}

export default Footer