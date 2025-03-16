import React from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'

const ProductItem = ({ id, name, price, description, image}) => {
  return (
    <div className='product-item'>
      <div className="product-item-img-container">
        <img className='food-item-image' src={image} alt=''/>
      </div>

      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt=''/>
        </div>
        <p className="product-item-desc">{description}</p>
        <p className="product-item-price">{price}</p>
      </div>
      
    </div>
  )
}

export default ProductItem

