import React from 'react'

const Image = ({ src, alt, className, onClick }) => {
  return (
    <>
      <img src={src} alt={alt} loading='lazy' onClick={onClick} className={className} />
    </>
  )
}

export default Image
