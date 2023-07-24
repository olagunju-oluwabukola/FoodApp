import React from 'react'
import {categories}from './Data.js'

const Category = () => {
   
  return (
    <div className='max-w-[1640px] px-4 py-12 m-auto ' >
<h1 className='text-blue-700 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

<div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
    {categories.map((item, index)=>(
        <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name}  className='w-20 h-[5em]' />
        </div>
       
    ))}
</div>
    </div>
  )
}

export default Category 