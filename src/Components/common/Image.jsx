import React from 'react'

const Image = ({ src, alt, className, onClick }) => {
  return (
    <>
      <div>
        <img src={src} alt={alt} loading='lazy' onClick={onClick} className={className} />
      </div>
    </>
  )
}

export default Image
