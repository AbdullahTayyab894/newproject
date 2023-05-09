import React from 'react'
import './CategoryButton.css'

const CategoryButton = () => {
  return (
    <div className='category-parent'>
      <div>
        <button className="category-btn1">All Course</button>
        <button className="category-btn2">Course in Progress</button>
        <button className="category-btn2 category-btn3">Completed Course</button>
      </div>
    </div>
  )
}

export default CategoryButton