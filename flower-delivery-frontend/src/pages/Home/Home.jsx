import React, { useState } from 'react'
import "./Home.css"
import Header from '../../comoponents/Header/Header'
import ExploreProducts from '../../comoponents/ExploreProducts/ExploreProducts'
import ProductDisplay from '../../comoponents/ProductDisplay/ProductDisplay'

const Home = () => {
    
    const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreProducts category={category} setCategory={setCategory} />
      <ProductDisplay category={category}/>
    </div>
  )
}

export default Home
