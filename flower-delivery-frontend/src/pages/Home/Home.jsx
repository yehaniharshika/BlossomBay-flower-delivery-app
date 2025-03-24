import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header';
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Reviews from '../../components/Reviews/Reviews';
import AppDownload from '../../components/AppDownload/AppDownload';


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
