import React from 'react'


const ProductButton = ({ className, imageSrc, productName }) => {
    
  return (
    <button className={`w-5/6 p-4 flex flex-row gap-3 items-center ${className}`}>
            <img className='' src={imageSrc} alt={productName} />
            <p>{productName}</p>
        </button>
  )
}


export default ProductButton;