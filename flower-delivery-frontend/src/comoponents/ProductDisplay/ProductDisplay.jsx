import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const ProductDisplay = () => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top Flower Arrangements Near You</h2>
      <div className="product-display-list">
        {food_list.map((item,index) => {
            return <ProductItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default ProductDisplay
