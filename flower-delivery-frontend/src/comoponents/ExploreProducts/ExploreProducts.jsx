import React from 'react'
import { menu_list } from '../../assets/assets'
import "./ExploreProducts.css"

const ExploreProducts = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-products'>
        <h1>Explore our products</h1>
        <p className="explore-menu-text">Experience the beauty of fresh, handcrafted floral arrangements, designed with love and care to brighten every occasion.Our mission is to deliver joy and elegance through stunning flowers, making every moment special.
        From classic roses to exotic bouquets, we bring nature’s finest creations right to your doorstep.🌸</p>

        <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                    <p>{item.menu_name}</p>
                </div>
                )     
            })}
        </div>
    </div>
  )
}

export default ExploreProducts
