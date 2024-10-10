import Business from '@/components/Business'
// import Categories from '@/components/Categories'
import React from 'react'
// import CategoryCard from '../ItemSliderContent/CategoryCard'
// import Categories from '@/components/Categories'
import CategoriesCard from '@/components/Categories'



const Market = () => {
  return (
    <div className="overflow-hidden">
      <Business/>
       {/* <CategoryCard/> */}
       <CategoriesCard/>
      
       
    </div>
  )
}

export default Market
