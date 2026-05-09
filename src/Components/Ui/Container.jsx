import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`${className} max-w-352.5 mx-auto`}>
      {children}
    </div>
  )
}

export default Container
