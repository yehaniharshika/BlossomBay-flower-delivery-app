import React, { useState } from 'react'
import "./Home.css"
import Header from '../../comoponents/Header/Header'
import ExploreProducts from '../../comoponents/ExploreProducts/ExploreProducts'

const Home = () => {
    
    const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreProducts category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home
