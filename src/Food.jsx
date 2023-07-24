import React, { useState } from 'react'
import {Data} from './Data.js'

const food = () => {
  const [foods, setFoods] = useState(Data);

  const filterType = (category) => {
    setFoods(Data.filter((item)=>{
        return item.category ===category;
    }));
  };

  const filterPrice = (price) => {
    setFoods(Data.filter((item)=>{
        return item.price===price;
    }));
  };

  return (
   
    <div className='max-w-[1640px m-auto px-4 py-12'>
        <h1 className='text-blue-700 font-bold text-4xl text-center'>Top Rated Menu</h1>
        {/** filter row*/}

        <div className='flex flex-col lg:flex-row justify-between'  >
              {/** filter type*/}
              <div>
                <p className='font-bold text-gray-600 text-2xl m-2 '>Available Foods</p>
                <div className='flex flex-wrap gap-6'>
                    <button onClick={() => setFoods(Data)} className='bg-blue-700 text-white p-1 rounded-xl hover:bg-black hover:text-white'>All</button>  
                    <button onClick={()=> filterType('burger')} className='bg-blue-700 text-white p-1 rounded-xl  hover:bg-black hover:text-white'>Burgers</button> 
                    <button  onClick={()=> filterType('pizza')} className='bg-blue-700 text-white p-1 rounded-xl  hover:bg-black hover:text-white'>Pizza</button> 
                    <button  onClick={()=> filterType('salads')} className='bg-blue-700 text-white p-1 rounded-xl hover:bg-black hover:text-white'>Salads</button> 
                     <button  onClick={()=> filterType('chicken')} className='bg-blue-700 text-white p-2 rounded-xl  hover:bg-black hover:text-white'>Chicken</button>
                </div>
              </div>
                  {/** filter price*/}
                  <div>
                     <p className='font-bold text-gray-700 text-2xl m-2'> Price Range</p>

                     <div className='flex gap-6 m-w-[390px] w-full '>
                        <button onClick={()=> filterPrice('$6')} className='bg-blue-700 text-white p-1 rounded-xl hover:bg-black hover:text-white'>$6</button>
                        <button onClick={()=> filterPrice('$7')} className='bg-blue-700 text-white p-1 rounded-xl hover:bg-black hover:text-white'>$7</button>
                        <button onClick={()=> filterPrice('$8')} className='bg-blue-700 text-white p-1 rounded-xl hover:bg-black hover:text-white'>$8</button>
                        <button onClick={()=> filterPrice('$9')} className='bg-blue-700 text-white p-1 rounded-xl hover:bg-black hover:text-white'>$9</button>
                     </div>
                  </div>
        </div>
 {/** food display*/}
<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4  '>
    {foods.map((item, index)=>(
         <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover  rounded-t-lg ' />

            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                 <p>
                    <span className='bg-blue-700 text-white p-1 rounded-full' >{item.price}</span>
                </p>
            </div>
        </div>
    ))}
</div>
    </div>
  )
}

export default food