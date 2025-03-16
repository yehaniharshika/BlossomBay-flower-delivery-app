import React, { useState } from 'react'
import "./Home.css"
import Header from '../../comoponents/Header/Header'
import ExploreProducts from '../../comoponents/ExploreProducts/ExploreProducts'
import ProductDisplay from '../../comoponents/ProductDisplay/ProductDisplay'
import Reviews from '../../comoponents/Reviews/Reviews'
import AppDownload from '../../comoponents/AppDownload/AppDownload'

const Home = () => {
    
    const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreProducts category={category} setCategory={setCategory} />
      <ProductDisplay category={category}/>
      <Reviews/>
      <AppDownload/>
    </div>
  )
}

export default Home
